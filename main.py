WSJoyStick.joy_stick_init()
radio.set_group(1)
basic.show_leds("""
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    """)

def on_forever():
    if WSJoyStick.Listen_Dir(DIR.U):
        radio.send_number(0)
        basic.show_arrow(ArrowNames.NORTH)
    elif WSJoyStick.Listen_Dir(DIR.U_R):
        radio.send_number(1)
        basic.show_arrow(ArrowNames.NORTH_EAST)
    elif WSJoyStick.Listen_Dir(DIR.R):
        radio.send_number(2)
        basic.show_arrow(ArrowNames.EAST)
    elif WSJoyStick.Listen_Dir(DIR.D_R):
        radio.send_number(3)
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif WSJoyStick.Listen_Dir(DIR.D):
        radio.send_number(4)
        basic.show_arrow(ArrowNames.SOUTH)
    elif WSJoyStick.Listen_Dir(DIR.D_L):
        radio.send_number(5)
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    elif WSJoyStick.Listen_Dir(DIR.L):
        radio.send_number(6)
        basic.show_arrow(ArrowNames.WEST)
    elif WSJoyStick.Listen_Dir(DIR.U_L):
        radio.send_number(7)
        basic.show_arrow(ArrowNames.NORTH_WEST)
    elif WSJoyStick.Listen_Key(KEY.P):
        radio.send_number(8)
        basic.show_string("P")
    elif WSJoyStick.Listen_Key(KEY.A):
        radio.send_number(9)
        basic.show_string("A")
    elif WSJoyStick.Listen_Key(KEY.B):
        radio.send_number(10)
        basic.show_string("B")
    elif WSJoyStick.Listen_Key(KEY.C):
        radio.send_number(11)
        basic.show_string("C")
    elif WSJoyStick.Listen_Key(KEY.D):
        radio.send_number(12)
        basic.show_string("D")
    elif WSJoyStick.Listen_Key(KEY.E):
        radio.send_number(13)
        basic.show_string("E")
    elif WSJoyStick.Listen_Key(KEY.F):
        radio.send_number(14)
        basic.show_string("F")
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever)
