input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        # # . # #
        . . # . .
        `)
    record.setMicGain(record.AudioLevels.Low)
    record.startRecording(record.BlockingState.Blocking)
    basic.pause(100)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . # # # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
basic.showNumber(input.temperature())
basic.forever(function () {
    if (input.temperature() > 35) {
        music.ringTone(880)
    }
    if (input.temperature() < 10) {
        music.ringTone(880)
    }
})
