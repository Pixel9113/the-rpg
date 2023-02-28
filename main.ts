controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordSwung = true
})
let swordSwung = false
let enemySprite: Sprite = null
let playerSprite = sprites.create(assets.image`playerImage`, SpriteKind.Player)
controller.moveSprite(playerSprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(playerSprite)
scene.setBackgroundColor(13)
for (let index = 0; index < 4; index++) {
    enemySprite = sprites.create(assets.image`enemyImage`, SpriteKind.Enemy)
    enemySprite.setPosition(randint(32, 220), randint(32, 220))
    enemySprite.follow(playerSprite, 20)
}
