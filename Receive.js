enum RadioMessage {
    message1 = 49434,
    OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura = 54833
}
let Bell = 0
let OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura = 0
radio.onReceivedMessage(Bell, function () {
    basic.showString("Bell Ringing.")
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedMessage(OllieOzMarthaChachiPoppyBobbySkullyEloiseIsaacLaura, function () {
    basic.showString("Received, Door unlocked.")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
