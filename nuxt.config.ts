import { NuxtPage } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css' },
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic' },
        { rel: 'stylesheet', href: '/main.css' }
      ],
    }
  },
  hooks: {
    'pages:extend'(pages: NuxtPage[]) {
      pages.splice(0)
      pages.push({
        path: '/',
        file: '/pages/Layout.vue',
        children: [
          {
            name: 'home',
            path: '',
            file: '/pages/index.vue'
          },
          {
            name: 'login',
            path: '/login',
            file: '/pages/Login.vue'
          },
          {
            name: 'register',
            path: '/register',
            file: '/pages/Login.vue'
          },
          {
            name: 'profile',
            path: '/profile/:id',
            file: '/pages/Profile.vue'
          },
          {
            name: 'settings',
            path: '/settings',
            file: '/pages/Settings.vue'
          },
          {
            name: 'articles',
            path: '/article',
            file: '/pages/EditArticle.vue'
          }
        ]
      });
    }
  },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      linkActiveClass: 'active',
    }
  }
})
