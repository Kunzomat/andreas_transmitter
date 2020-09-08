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
        radio.sendNumber(0)
        basic.showArrow(ArrowNames.North)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.East)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.SouthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.South)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendNumber(5)
        basic.showArrow(ArrowNames.SouthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendNumber(6)
        basic.showArrow(ArrowNames.West)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendNumber(7)
        basic.showArrow(ArrowNames.NorthWest)
    } else if (WSJoyStick.Listen_Key(KEY.P)) {
        radio.sendNumber(8)
        basic.showString("P")
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        radio.sendNumber(9)
        basic.showString("A")
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        radio.sendNumber(10)
        basic.showString("B")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        radio.sendNumber(11)
        basic.showString("C")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        radio.sendNumber(12)
        basic.showString("D")
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        radio.sendNumber(13)
        basic.showString("E")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        radio.sendNumber(14)
        basic.showString("F")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
