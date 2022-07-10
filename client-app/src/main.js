import { createApp } from 'vue'
import App from './App.vue'

// createApp.config.productionTip = false
new createApp({
    render: h => h(App)
}).$mount('#app');
//createApp(App).mount('#app')





