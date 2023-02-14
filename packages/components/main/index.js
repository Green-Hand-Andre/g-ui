import GMain from './Main.vue'
GHeader.install = (app)=>{
    app.component(GMain.name,GMain)
}

// 单独导出Button对象
export const Main = GMain


// 默认导出
export default GMain