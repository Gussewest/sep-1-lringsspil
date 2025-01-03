namespace SpriteKind {
    export const Maskine = SpriteKind.create()
    export const Worker = SpriteKind.create()
    export const TalkingWorker = SpriteKind.create()
    export const Klimamand = SpriteKind.create()
    export const MissionGadget = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TalkingWorker, function (sprite, otherSprite) {
    Arbejdermand.sayText("Pas på Truckliftene, de har travlt og ser dig nok ikke!", 10000, true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 1) {
        sprites.destroy(Natron1)
        PickUpNatron += PickUpNatron + 1
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            c b 5 5 5 d b b d 5 5 5 b c 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 d d d c c 5 5 f 
            f b b f b f f f f f f b b f 
            f b b e f 8 8 8 8 8 f b b f 
            c f b f f 1 1 8 8 1 f b f c 
            . c e c f 1 8 1 8 1 f d c . 
            . e 4 c f 1 8 8 1 1 f 4 c . 
            . e c b f 1 8 8 8 1 f c . . 
            . . c c f 8 8 8 8 8 f c . . 
            . . . . c f f f f f . . . . 
            `],
        500,
        true
        )
    }
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 1) {
        if (PickUpNatron == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                .........................
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                cb555dbbd555bc...........
                f555b4444b555f...........
                f55cc4dddcc55f...........
                fbbfbffffffbbf...........
                fbbef88888fbbf...........
                cfbff11881fbfc...........
                .cecf18181fdc............
                .e4cf18811f4c............
                .ecbf18881fc.............
                ..ccf88888fc.............
                ....cfffff...............
                `,img`
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                .f555dbbd555f............
                f555b4444b5fffffff.......
                f55cc4444cf8111118f......
                fbbfbf44fbf8888188fddd...
                fbb41fddf1f8881888f......
                .fbfddddddf8818888f......
                .fefe4444ef8111118f......
                .e4f6999964fffffff.......
                .4dc999999cd4............
                .4fb3b3b3bbf4............
                ..ff3b3b33ff.............
                ....ffbbff...............
                `,img`
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                .f555dbbd555f............
                f555b4444b5fffffff.......
                f55cc4444cf8111118f......
                fbbfbf44fbf8888188fddd...
                fbb41fddf1f8881888f111...
                .fbfddddddf8818888f1.11..
                .fefe4444ef8111118f.1....
                .e4f6999964fffffff.......
                .4dc999999cd4............
                .4fb3b3b3bbf4............
                ..ff3b3b33ff.............
                ....ffbbff...............
                `,img`
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                .f555dbbd555f............
                f555b4444b5fffffff.......
                f55cc4444cf8111118f......
                fbbfbf44fbf8888188fddd...
                fbb41fddf1f8881888f111...
                .fbfddddddf8818888f1.11..
                .fefe4444ef8111118f.1..1.
                .e4f6999964fffffff...1...
                .4dc999999cd4.......1....
                .4fb3b3b3bbf4............
                ..ff3b3b33ff.............
                ....ffbbff...............
                `,img`
                .........................
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                cb555dbbd555bc...........
                f555b4444b555f...........
                f55cc4dddcc55f...........
                fbbfbffffffbbf...........
                fbbef88888fbbf...........
                cfbff11881fbfc...........
                .cecf18181fdc............
                .e4cf18811f4c............
                .ecbf18881fc.............
                ..ccf88888fc.............
                ....cfffff...............
                `,img`
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                .f555dbbd555f............
                f555b4444b5fffffff.......
                f55cc4444cf8111118f......
                fbbfbf44fbf8888188fddd...
                fbb41fddf1f8881888f......
                .fbfddddddf8818888f..11..
                .fefe4444ef8111118f.1..1.
                .e4f6999964fffffff...1...
                .4dc999999cd4.......1....
                .4fb3b3b3bbf4.......1.1..
                ..ff3b3b33ff.............
                ....ffbbff...............
                `,img`
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                .f555dbbd555f............
                f555b4444b5fffffff.......
                f55cc4444cf8111118f......
                fbbfbf44fbf8888188fddd...
                fbb41fddf1f8881888f......
                .fbfddddddf8818888f......
                .fefe4444ef8111118f......
                .e4f6999964fffffff...1...
                .4dc999999cd4.......1....
                .4fb3b3b3bbf4.......1.1..
                ..ff3b3b33ff.............
                ....ffbbff...............
                `,img`
                .........................
                .....ffff................
                ...ff5555ff..............
                ..f55555555f.............
                .f5555555555f............
                cb555dbbd555bc...........
                f555b4444b555f...........
                f55cc4dddcc55f...........
                fbbfbffffffbbf...........
                fbbef88888fbbf...........
                cfbff11881fbfc...........
                .cecf18181fdc............
                .e4cf18811f4c............
                .ecbf18881fc.............
                ..ccf88888fc.............
                ....cfffff...............
                `],
            500,
            false
            )
        } else if (mySprite.overlapsWith(Farvebeholderne)) {
            Farvebeholderne = sprites.create(assets.image`myImage11`, SpriteKind.MissionGadget)
        }
    }
})
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
function Farvebeholdere () {
    Farvebeholderne = sprites.create(assets.image`myImage12`, SpriteKind.MissionGadget)
    Farvebeholderne.setPosition(30, 384)
    Farvebeholderne = sprites.create(assets.image`myImage12`, SpriteKind.MissionGadget)
    Farvebeholderne.setPosition(48, 384)
    Farvebeholderne = sprites.create(assets.image`myImage12`, SpriteKind.MissionGadget)
    Farvebeholderne.setPosition(96, 384)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
    if (Plusplus == 0) {
        game.showLongText("Det må være dig der er kommet for at hjælpe mig? ", DialogLayout.Full)
        game.showLongText("Din første opgave er at hjælpe med at neutralisere deres syre fyldige farvekemikalier da de bare hælder det ud i den flod der løber forbi fabrikken. Du skal derfor se om du kan finde noget natron de har gemt i et fjernt hjørne på fabrikken, tage det med knappen b og fylde det i de store grønne tønder med farve på lageret.   ", DialogLayout.Full)
        game.showLongText("Flasken du leder efter er blå, med et hvidt N på midten", DialogLayout.Full)
    }
})
function Natron () {
    Natron1 = sprites.create(assets.image`myImage10`, SpriteKind.MissionGadget)
    Natron1.setPosition(928, 928)
}
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
let Farvebeholderne: Sprite = null
let Trucken: Sprite = null
let Natron1: Sprite = null
let Arbejdermand: Sprite = null
let LVL = 0
let PickUpNatron = 0
let Plusplus = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    c b 5 5 5 d b b d 5 5 5 b c 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b e 1 f d d f 1 e b b f 
    c f b 4 4 d d d d d f b f c 
    . c d d d 4 9 9 9 6 c e c . 
    . c 4 d d 4 9 9 9 9 c 4 e . 
    . . c e e b b b 3 b b c e . 
    . . c c 3 b 3 b 3 3 c c . . 
    . . . . c c c b b c . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(450, 960)
game.showLongText("Du skal lede efter klimaaktivisten på fabrikken, han mener de skjuler nogle ting ", DialogLayout.Full)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
Plusplus = 0
PickUpNatron = 0
LVL = 1
Maskineri()
Truck()
Skæreren()
Polyester_varmer()
Polyvæveren()
Factoryworker()
Klimaaktivist()
Natron()
Farvebeholdere()
