export default defineNuxtPlugin(() => {
  const { gtmId, gaId } = useRuntimeConfig().public
  if (!gtmId && !gaId) return

  const { consent, load } = useCookieConsent()
  load()

  let injected = false

  watch(consent, (value) => {
    if (injected || !value?.analytics) return
    injected = true

    if (gtmId) {
      useHead({
        script: [
          {
            key: 'gtm-script',
            innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
          }
        ],
        noscript: [
          {
            key: 'gtm-noscript',
            innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            tagPosition: 'bodyOpen'
          }
        ]
      })
    }

    if (gaId) {
      useHead({
        script: [
          { key: 'ga4-src', src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
          {
            key: 'ga4-init',
            innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`
          }
        ]
      })
    }
  }, { immediate: true })
})
