namespace SpriteKind {
    export const Sofa = SpriteKind.create()
    export const Computer = SpriteKind.create()
    export const Plastflaske = SpriteKind.create()
    export const Skraldespand = SpriteKind.create()
    export const bilar = SpriteKind.create()
    export const tæppe = SpriteKind.create()
    export const pizza = SpriteKind.create()
    export const metal = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.metal, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(metal, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 1) {
        mySprite.sayText("Sådan!", 2000, false)
        info.changeScoreBy(100)
        Skraldespand1.sayText("Haps", 500, false)
    } else {
        info.changeLifeBy(-1)
        mySprite.sayText("Det var forkert!", 2000, false)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
    }
})
sprites.onOverlap(SpriteKind.pizza, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(Random_2, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 3) {
        mySprite.sayText("Sådan!", 2000, false)
        info.changeScoreBy(100)
        Skraldespand1.sayText("Haps", 500, false)
    } else {
        info.changeLifeBy(-1)
        mySprite.sayText("Det var forkert!", 2000, false)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sofa, function (sprite, otherSprite) {
    Sofa.follow(mySprite)
    mySprite.sayText("Sofa", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tæppe, function (sprite, otherSprite) {
    mySprite.sayText("tæppe", 2000, false)
    tæppe.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pizza, function (sprite, otherSprite) {
    mySprite.sayText("pizza", 2000, false)
    Random_2.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Computer, function (sprite, otherSprite) {
    mySprite.sayText("computer", 2000, false)
    Computer.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Computer, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(Computer, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 1) {
        mySprite.sayText("Sådan!", 2000, false)
        Skraldespand1.sayText("Haps", 500, false)
        info.changeScoreBy(100)
    } else {
        mySprite.sayText("Det var forkert!", 2000, false)
        info.changeLifeBy(-1)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.metal, function (sprite, otherSprite) {
    mySprite.sayText("mønt", 2000, false)
    metal.follow(mySprite)
})
sprites.onOverlap(SpriteKind.tæppe, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(tæppe, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 5) {
        mySprite.sayText("Sådan!", 2000, false)
        info.changeScoreBy(100)
        Skraldespand1.sayText("Haps", 500, false)
    } else {
        info.changeLifeBy(-1)
        mySprite.sayText("Det var forkert!", 2000, false)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Plastflaske, function (sprite, otherSprite) {
    mySprite.sayText("flaske", 2000, false)
    Plast_flaske.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Plastflaske, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(Plast_flaske, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 4) {
        mySprite.sayText("Sådan!", 2000, false)
        info.changeScoreBy(100)
        Skraldespand1.sayText("Haps", 500, false)
    } else {
        info.changeLifeBy(-1)
        mySprite.sayText("Det var forkert!", 2000, false)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Sofa, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Skraldespand1,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    600,
    false
    )
    sprites.destroy(Sofa, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText(Spørgsmål, DialogLayout.Top)
    game.splash(Svara + (Svarb + (Svarc + (Svard + Svare))))
    if (game.askForNumber("") == 5) {
        info.changeScoreBy(100)
        mySprite.sayText("Sådan!", 2000, false)
        Skraldespand1.sayText("Haps", 500, false)
    } else {
        mySprite.sayText("Det var forkert!", 2000, false)
        Skraldespand1.sayText("Fy for helvede!", 500, false)
        info.changeLifeBy(-1)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bilar, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    500,
    true
    )
})
function spawnRandomItem () {
    itemType = randint(1, 3)
    if (itemType == 1) {
        tæppe = sprites.create(img`
            ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
            .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
            bbdd3dddddddddddddddddddddd3ddbb
            b333dd33333333333333333333dd333b
            bbbdd3333333333333333333333ddbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d3333333d33333333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d33333333d3333333d33b
            bbbdd3333333333333333333333ddbbb
            b333dd33333333333333333333dd333b
            bbdd3dddddddddddddddddddddd3ddbb
            b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
            .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
            ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
            `, SpriteKind.tæppe)
        tæppe.setScale(0.4, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(tæppe, sprites.castle.tileGrass2)
    } else if (itemType == 2) {
        Random_2 = sprites.create(img`
            .............beebbbb............
            ............eebbbb4bb...........
            ............eb344bb4bb..........
            ............e44334bb4bb.........
            ............eb433344b4be........
            ............4eb43344444be.......
            ...........bd4eb43333344bb......
            ..........b455d4443333444bb.....
            ..........4d5555d444333444bb....
            .........4555555dd4b4443444be...
            ........bd5555d555d4bb444444ee..
            ........b55ddd665555bb4b44444ee.
            .......bd5555677655554ebb44444eb
            .......43222558855555d4eeb44b4ee
            ......b422332ddd555222d4eebbb4be
            ......be22232ed55522332db4ebbbbe
            .....bde22222e555e22232edd4bbbbe
            .....b52e222e3555e22222eddd4ebee
            ....bd552eee355552e222e355544eee
            ....665dd5555555552eee355dd4deee
            ...6776555555555555555551554d4ee
            ...4885222555dddd6655551544d4eee
            ..b45522332555dd677611d444ddeee.
            ..4d5222232e55555881d44ddd4eee..
            .bdd5e22222e555115114d54d4ee....
            .b55d2e222e351144d1d55eeee......
            bd5ddd2eee3d444555dd4e..........
            b555115dddd55d544eede...........
            4511d444d5544ee...4de...........
            41d4555d4ee........44...........
            41554eede.......................
            44ee...4e.......................
            `, SpriteKind.pizza)
        Random_2.setScale(0.4, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(Random_2, sprites.castle.tileGrass2)
    } else {
        metal = sprites.create(img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `, SpriteKind.metal)
        metal.setScale(0.4, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(metal, sprites.castle.tileGrass2)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Hvordan vil du affaldssortere?", DialogLayout.Top)
})
let bilar: Sprite = null
let itemType = 0
let tæppe: Sprite = null
let Random_2: Sprite = null
let metal: Sprite = null
let Skraldespand1: Sprite = null
let mySprite: Sprite = null
let Plast_flaske: Sprite = null
let Computer: Sprite = null
let Sofa: Sprite = null
let Svare = ""
let Svard = ""
let Svarc = ""
let Svarb = ""
let Svara = ""
let Spørgsmål = ""
Spørgsmål = "Hvordan vil du affaldssortere? "
Svara = "1.  Metal  "
Svarb = "2.  Pap/papir  "
Svarc = "3.  Madaffald  "
Svard = "4. Plast  "
Svare = "5. Storskrald  "
Sofa = sprites.create(img`
    ..cccc.........
    .cdddbc........
    cbdddbccccccc..
    cbdddbcbdddddc.
    cbdddbcdddddbbc
    cbdddbcbbbbbbbc
    cbdddbccccccbbc
    cbdddbcddddbccc
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbddbbcdddddbc.
    cbbbbbcccccccc.
    cbbbbbcbdddddc.
    cbbbbbcdddddbbc
    cbbbbbcbbbbbbbc
    cbbbbbcbbbbbbbc
    cbbbbbcbbbbbbbc
    .cccccccccccccc
    .cbbc.....cbbc.
    `, SpriteKind.Sofa)
Computer = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Computer)
Plast_flaske = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........1188........
    ........8888........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......888888.......
    .......888888.......
    .......888888.......
    ........8888........
    ........4444........
    ....................
    `, SpriteKind.Plastflaske)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Skraldespand1 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Skraldespand)
let text_list = [
"Restaffald",
"Pap/papir",
"Tekstilaffald",
"Plastik",
"Batteri",
"Madaffald"
]
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(Skraldespand1, tiles.getTileLocation(4, 4))
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
tiles.placeOnRandomTile(Sofa, sprites.castle.tileGrass2)
tiles.placeOnRandomTile(Computer, sprites.castle.tileGrass2)
tiles.placeOnRandomTile(Plast_flaske, sprites.castle.tileGrass2)
controller.moveSprite(mySprite)
info.startCountdown(60)
info.setLife(5)
info.setScore(0)
Skraldespand1.sayText("Jeg er din skraldespand!", 2000, false)
game.onUpdateInterval(5000, function () {
    spawnRandomItem()
})
game.onUpdateInterval(3000, function () {
    bilar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bilar)
    tiles.placeOnTile(bilar, tiles.getTileLocation(0, 7))
    bilar.setVelocity(50, 0)
    bilar.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(5000, function () {
    bilar = sprites.create(img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 7 7 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 7 7 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 7 7 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f f f b f 8 8 f f f b f . 
        . . . . c b b . . . . c b b . . 
        `, SpriteKind.bilar)
    tiles.placeOnTile(bilar, tiles.getTileLocation(15, 8))
    bilar.setVelocity(-50, 0)
    bilar.setFlag(SpriteFlag.DestroyOnWall, true)
})
