import GContainer from './Container.vue'
GContainer.install = (app)=>{
    app.component(GContainer.name,GContainer)
}

// 单独导出Button对象
export const Container = GContainer


// 默认导出
export default GContainer