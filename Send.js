enum RadioMessage {
    message1 = 49434,
    OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura = 54833,
    Bell = 47979
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura)
    basic.showString("Sent, Door Unlocking.")
    radio.setFrequencyBand(60)
})
