import {createApp} from "vue"
import App from "./App.vue"
import '../../src/styles/index.scss'
import GUI from '../../src/index'
console.log(GUI)







createApp(App).use(GUI).mount("#app")