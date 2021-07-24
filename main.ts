function charp () {
    for (let index = 0; index < randint(0, 3); index++) {
        for (let ang = 0; ang <= 90; ang++) {
            th = ang * 0.0348888
            th = th * 400 + 1200
            freq = Math.round(Math.sin(th))
            music.ringTone(freq)
        }
    }
}
let freq = 0
let th = 0
basic.showLeds(`
    . # # . .
    # # # . .
    . # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    charp()
})
