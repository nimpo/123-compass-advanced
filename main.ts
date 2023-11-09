function CoordY (realY: number) {
    return Math.round(2 - 2 * realY)
}
function toRadians (degrees: number) {
    return degrees / 180 * Math.PI
}
function coordX (realX: number) {
    return Math.round(2 + 2 * realX)
}
let y = 0
let x = 0
led.plot(2, 2)
basic.forever(function () {
    led.unplot(x, y)
    if (input.compassHeading() < 45 || input.compassHeading() >= 315) {
        x = coordX(0 - Math.tan(toRadians(input.compassHeading())))
        y = 0
    } else if (input.compassHeading() < 135) {
        x = 0
        y = CoordY(1 / Math.tan(toRadians(input.compassHeading())))
    } else if (input.compassHeading() < 225) {
        x = coordX(Math.tan(toRadians(input.compassHeading())))
        y = 4
    } else {
        x = 4
        y = CoordY(1 / (0 - Math.tan(toRadians(input.compassHeading()))))
    }
    led.plot(x, y)
})
