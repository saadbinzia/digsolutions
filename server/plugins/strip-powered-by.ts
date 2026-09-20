// Nuxt's own renderer unconditionally sets "x-powered-by: Nuxt" on every render
// (see @nuxt/nitro-server/runtime/handlers/renderer.mjs), including at prerender
// time, which is what ends up baked into the deployed static response headers.
// routeRules headers alone can't win against that since the renderer sets its
// header after route middleware runs, so it has to be stripped in `beforeResponse`.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    removeResponseHeader(event, 'x-powered-by')
  })
})
