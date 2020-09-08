WSJoyStick.onKey(KEY.P, function () {
    radio.sendString("P")
    basic.showString("P")
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.North)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.East)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.SouthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendNumber(5)
        basic.showArrow(ArrowNames.South)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendNumber(6)
        basic.showArrow(ArrowNames.SouthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendNumber(7)
        basic.showArrow(ArrowNames.West)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendNumber(8)
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
