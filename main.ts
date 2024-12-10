namespace SpriteKind {
    export const Maskine = SpriteKind.create()
    export const Worker = SpriteKind.create()
    export const TalkingWorker = SpriteKind.create()
    export const Klimamand = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TalkingWorker, function (sprite, otherSprite) {
    Arbejdermand.sayText("Pas på Truckliftene, de har travlt og ser dig nok ikke", 10000, true)
})
function Truck () {
    Trucken = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    Trucken.setPosition(800, 416)
    Trucken.setVelocity(50, 50)
    Trucken.setBounceOnWall(true)
    animation.runImageAnimation(
    Trucken,
    assets.animation`myAnim2`,
    200,
    true
    )
    Trucken = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    Trucken.setPosition(200, 416)
    Trucken.setVelocity(50, 50)
    Trucken.setBounceOnWall(true)
    animation.runImageAnimation(
    Trucken,
    assets.animation`myAnim2`,
    200,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    animation.stopAnimation(animation.AnimationTypes.All, Kontordame)
})
function Polyester_varmer () {
    Poly_varme = sprites.create(assets.image`myImage3`, SpriteKind.Maskine)
    Poly_varme.setPosition(80, 784)
    animation.runImageAnimation(
    Poly_varme,
    assets.animation`myAnim6`,
    200,
    true
    )
    Poly_varme = sprites.create(assets.image`myImage3`, SpriteKind.Maskine)
    Poly_varme.setPosition(80, 880)
    animation.runImageAnimation(
    Poly_varme,
    assets.animation`myAnim6`,
    200,
    true
    )
}
function Klimaaktivist () {
    Klimaaktivisten = sprites.create(assets.image`myImage9`, SpriteKind.Klimamand)
    Klimaaktivisten.setPosition(912, 112)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Factory floor5`, function (sprite, location) {
    animation.runImageAnimation(
    Kontordame,
    assets.animation`myAnim10`,
    200,
    true
    )
    Kontordame.sayText("Velkommen til fabrikken, du er velkommen til at tage en tur rundt og kigge", 10000, true)
})
function Factoryworker () {
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(768, 688)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(672, 624)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(864, 720)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(768, 896)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(752, 624)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(816, 512)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(848, 400)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Worker1 = sprites.create(assets.image`myImage6`, SpriteKind.Worker)
    Worker1.setPosition(560, 640)
    animation.runImageAnimation(
    Worker1,
    assets.animation`myAnim9`,
    200,
    true
    )
    Kontordame = sprites.create(assets.image`myImage7`, SpriteKind.Worker)
    Kontordame.setPosition(480, 784)
    Arbejdermand = sprites.create(assets.image`myImage8`, SpriteKind.TalkingWorker)
    Arbejdermand.setPosition(450, 608)
}
function Maskineri () {
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(512, 304)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(560, 304)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(608, 304)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(560, 368)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(512, 368)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(608, 368)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(512, 448)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(560, 448)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
    Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
    Farve_maskine.setPosition(608, 448)
    animation.runImageAnimation(
    Farve_maskine,
    assets.animation`myAnim0`,
    200,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
    if (Plusplus == 0) {
        Arbejdermand.sayText(game.ask("Er det dig der er kommet for at hjælpe mig?"))
        Plusplus += Plusplus + 1
    }
})
function Skæreren () {
    Poly_varme = sprites.create(assets.image`myImage0`, SpriteKind.Maskine)
    Poly_varme.setPosition(700, 60)
    animation.runImageAnimation(
    Poly_varme,
    assets.animation`myAnim5`,
    200,
    true
    )
    Poly_varme = sprites.create(assets.image`myImage0`, SpriteKind.Maskine)
    Poly_varme.setPosition(512, 212)
    animation.runImageAnimation(
    Poly_varme,
    assets.animation`myAnim5`,
    200,
    true
    )
}
function Polyvæveren () {
    Polyvæv = sprites.create(assets.image`myImage4`, SpriteKind.Maskine)
    Polyvæv.setPosition(220, 832)
    animation.runImageAnimation(
    Polyvæv,
    assets.animation`myAnim7`,
    200,
    true
    )
}
let Polyvæv: Sprite = null
let Farve_maskine: Sprite = null
let Worker1: Sprite = null
let Klimaaktivisten: Sprite = null
let Poly_varme: Sprite = null
let Kontordame: Sprite = null
let Trucken: Sprite = null
let Arbejdermand: Sprite = null
let Plusplus = 0
tiles.setCurrentTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setPosition(450, 960)
game.showLongText("Du skal lede efter klimaaktivisten på fabrikken, han mener de skjuler nogle ting ", DialogLayout.Full)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
Plusplus = 0
Maskineri()
Truck()
Skæreren()
Polyester_varmer()
Polyvæveren()
Factoryworker()
Klimaaktivist()
