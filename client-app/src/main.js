import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
//import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
//import { faUserSecret } from '@fortawesome/fontawesome-common-types'

/* add icons to the library */
//library.add(faUserSecret)
// createApp.config.productionTip = false


// createApp(App).mount('#app')

// Your app
const app = createApp(App);

// Globally register your component
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;
// Mount your app
app.mount('#app');





