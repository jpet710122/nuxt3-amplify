// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
//   modules: [
//     '@nuxtjs/tailwindcss'
//   ],
// // @ts-ignore
//   tailwindcss: {
//     cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
//     configPath: 'tailwind.config',
//     exposeConfig: {
//       level: 2
//     },
//     config: {},
//     viewer: true,
//   },
    vite: {
    define: {
      'window.global': {}
    }
  }
})
