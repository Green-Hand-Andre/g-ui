const {name,version} = require('../package.json')
// import Button from "../packages/components/button"
import * as Components from '../packages'
export * from '../packages'
const install=(app)=>{
    
    Object.keys(Components).forEach(key =>{
        console.log(Components)
        app.use(Components[key])
    })
    

}
export default{
    name,
    version,
    ...Components,
    install
}