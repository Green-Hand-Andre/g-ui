import GButton from './Button.vue'
GButton.install = (app)=>{
    app.component(GButton.name,GButton)
}

// 单独导出Button对象
export const Button = GButton


// 默认导出
export default GButton