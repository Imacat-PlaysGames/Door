enum RadioMessage {
    message1 = 49434,
    OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura = 54833
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 48735893) {
        basic.showString("Received, Door unlocked.")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (receivedNumber == 1) {
        basic.showString("Bell Ringing.")
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
