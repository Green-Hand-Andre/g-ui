import GHeader from './Header.vue'
GHeader.install = (app)=>{
    app.component(GHeader.name,GHeader)
}

// 单独导出Button对象
export const Header = GHeader


// 默认导出
export default GHeader