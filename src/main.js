import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/css/costume.css"
import "aos/dist/aos.css"
import "../src/assets/js/smooth-scroll.polyfills.min.js"
import "aos/dist/aos.js"
import "../src/assets/js/main.js"
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app