// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/bootstrap.min.css'
// import '~/assets/css/tsc3wjq.css'
import '~/assets/css/css.min.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  //   integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  //   crossorigin:"anonymous"
  // })
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://use.typekit.net/tsc3wjq.css'
  // })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://pro.fontawesome.com/releases/v5.8.1/css/light.css',
    integrity:"sha384-3SMOAKCN8LYSMjkWz1ChDg4pHSLtD+LuKXaZoHxE1oyDneLR6Ebjm3XHMHO9fWu3",
    crossorigin:"anonymous"
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/tsc3wjq.css'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://pro.fontawesome.com/releases/v5.8.1/css/brands.css',
    integrity:"sha384-3SMOAKCN8LYSMjkWz1ChDg4pHSLtD+LuKXaZoHxE1oyDneLR6Ebjm3XHMHO9fWu3",
    crossorigin:"anonymous"
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://pro.fontawesome.com/releases/v5.8.1/css/fontawesome.css',
    integrity:"sha384-3SMOAKCN8LYSMjkWz1ChDg4pHSLtD+LuKXaZoHxE1oyDneLR6Ebjm3XHMHO9fWu3",
    crossorigin:"anonymous"
  })
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: '/css.min.css'
  // })

}
