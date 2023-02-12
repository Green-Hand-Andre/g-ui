const {name,version} = require('../package.json')
const install=(app)=>{
    
console.log(app,'install函数执行')
}
export default{
    name,
    version,
    install
}