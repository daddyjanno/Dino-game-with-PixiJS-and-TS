import * as PIXI from 'pixi.js'
import { Assets } from '@pixi/assets'
import manifest from './manifest.json'

console.log('test')
console.log(manifest)

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x109bb,
})
document.body.appendChild(app.view)

await Assets.init({ manifest })
const assets = await Assets.loadBundle(['ghost', 'cloud', 'obstacle'])

const ghostTextures = Object.values(assets.ghost)
console.log(ghostTextures)

function GetSprite(texturesArray) {
    return new PIXI.AnimatedSprite(texturesArray)
}

const player = GetSprite(ghostTextures)
player.x = 100
player.y = 100
player.animationSpeed = 0.05
player.play()

app.stage.addChild(player)
