import * as PIXI from 'pixi.js'
import ghost from './assets/images/ghost/*.png'

console.log('test')
console.log(ghost)

const app = new PIXI.Application()
document.body.appendChild(app.view)
