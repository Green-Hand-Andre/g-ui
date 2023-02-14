const {name,version} = require('../package.json')
import Button from "../packages/components/button"
const install=(app)=>{
    
console.log(app,'install函数执行')
app.use(Button)
}
export default{
    name,
    version,
    Button,
    install
}