import type { Service } from '~/data/services'
import type { CaseStudy } from '~/data/portfolio'
import type { BlogPost } from '~/data/blog'
import { services as enServices } from '~/data/services'
import { caseStudies as enCaseStudies } from '~/data/portfolio'
import { blogPosts as enBlogPosts } from '~/data/blog'
import { services as esServices, caseStudies as esCaseStudies, blogPosts as esBlogPosts } from '~/data/content/es'
import { services as deServices, caseStudies as deCaseStudies, blogPosts as deBlogPosts } from '~/data/content/de'
import { services as nlServices, caseStudies as nlCaseStudies, blogPosts as nlBlogPosts } from '~/data/content/nl'
import { services as frServices, caseStudies as frCaseStudies, blogPosts as frBlogPosts } from '~/data/content/fr'

interface ContentBundle {
  services: Service[]
  caseStudies: CaseStudy[]
  blogPosts: BlogPost[]
}

const bundles: Record<string, ContentBundle> = {
  en: { services: enServices, caseStudies: enCaseStudies, blogPosts: enBlogPosts },
  es: { services: esServices, caseStudies: esCaseStudies, blogPosts: esBlogPosts },
  de: { services: deServices, caseStudies: deCaseStudies, blogPosts: deBlogPosts },
  nl: { services: nlServices, caseStudies: nlCaseStudies, blogPosts: nlBlogPosts },
  fr: { services: frServices, caseStudies: frCaseStudies, blogPosts: frBlogPosts }
}

export function useContent() {
  const { locale } = useI18n()
  const bundle = computed(() => bundles[locale.value] ?? bundles.en)

  return {
    services: computed(() => bundle.value.services),
    caseStudies: computed(() => bundle.value.caseStudies),
    blogPosts: computed(() => bundle.value.blogPosts),
    getServiceBySlug: (slug: string) => bundle.value.services.find(s => s.slug === slug),
    getCaseStudyBySlug: (slug: string) => bundle.value.caseStudies.find(c => c.slug === slug),
    getBlogPostBySlug: (slug: string) => bundle.value.blogPosts.find(p => p.slug === slug)
  }
}
