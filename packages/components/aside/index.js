import GAside from './Aside.vue'
GAside.install = (app)=>{
    app.component(GAside.name,GAside)
}

// 单独导出Button对象
export const Aside = GAside


// 默认导出
export default GAside