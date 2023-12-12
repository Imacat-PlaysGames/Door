enum RadioMessage {
    message1 = 49434,
    OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura = 54833,
    Bell = 47979
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(48735893)
    basic.showString("Unlock")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showString("Bell")
})
