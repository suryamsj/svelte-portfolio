import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/costume.css";
import "../src/assets/js/smooth-scroll.polyfills.min.js";
import "../src/assets/js/costume.js";
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
})

export default app