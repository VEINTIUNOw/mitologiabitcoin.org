console.log('This Works')
document.addEventListener('DOMContentLoaded', () => {
  //   import { inject } from '@vercel/analytics'
  // inject()
  console.log('This Works too')
  const inject = require('@vercel/analytics').inject
  console.log('inject', inject)
  inject()
})
