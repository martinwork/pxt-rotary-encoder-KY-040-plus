# KY-040 Rotary Encoder Plus — MakeCode Extension

MakeCode extension for the KY-040 rotary encoder and compatible rotary encoders, supporting up to 3 encoders simultaneously.

- Supports 1–3 encoders at the same time
- Supports bare KY-040 component without PCB (uses internal micro:bit pull-ups)
- Added debouncing to avoid common errors with low quality KY-040 parts
- Simple connect blocks for common pin layouts; advanced block lets you choose any pin
- Supports active-high switches (e.g. RGB rotary encoder button) via the `switchType` parameter
- Removed noisy serial debug messages that interfered with student code

## Hardware Setup

Connect each encoder's CLK, DT, and SW pins to available digital pins on the micro:bit. Connect GND to GND.
Rotary Encoders are simple switches, can work on 3.3v.

### Recommended pin assignments (micro:bit v2)

| Encoder | CLK | DT  | SW  |
| ------- | --- | --- | --- |
| E1      | P0  | P1  | P2  |
| E2      | P8  | P9  | P16 |
| E3      | P13 | P14 | P15 |

Avoid P3, P4, P6, P7, P10 — these are shared with the LED matrix and will conflict unless you call `led.enable(false)` first. Avoid P12 (reserved for accessibility).

**micro:bit v1 note:** P9 is LED row 3 on v1. If using a v1 board, replace P9 with P16 and find an alternative SW pin. All other pins in the table above are safe on both versions.

## Blocks

### Connect rotary encoder (preset pins)

Must be called before any other blocks. Repeat for each encoder you use.

```sig
rotaryEncoderPlus.connectEncoder1()
rotaryEncoderPlus.connectEncoder2()
rotaryEncoderPlus.connectEncoder3()
```

### Connect rotary encoder (custom pins)

Use when you need to choose your own pins, or for active-high switches like the RGB rotary encoder.

```sig
rotaryEncoderPlus.connectAdvanced(rotaryEncoderPlus.EncoderID.E1, DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, rotaryEncoderPlus.SwitchType.Standard)
```

`rotaryEncoderPlus.SwitchType.Standard` — button connects to GND when pressed (KY-040 and most encoders, default)
`rotaryEncoderPlus.SwitchType.ActiveHigh` — button connects to 3.3V when pressed (e.g. RGB rotary encoder)

### On event (rotate or button press)

```sig
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.Clockwise, () => {})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.CounterClockwise, () => {})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.ButtonPress, () => {})
```

## Example: Single encoder number input

```blocks
basic.pause(1000); // --- Setup ---
basic.showIcon(IconNames.Chessboard);
rotaryEncoderPlus.connectEncoder1()
let count = 13;
led.plotBarGraph(count, 25);

rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.CounterClockwise, () => {
    count -= 1
    serial.writeValue("count", count);
    led.plotBarGraph(count, 25);
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.Clockwise, () => {
    count += 1
    serial.writeValue("count", count);
    basic.showNumber(count);
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.ButtonPress, () => {
    basic.showIcon(IconNames.Yes);
    basic.pause(1000);
    led.plotBarGraph(count, 25);
})
```

## Example: Three Encoders

```blocks
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.CounterClockwise, function () {
    basic.showNumber(1)
    basic.showArrow(ArrowNames.West)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E3, rotaryEncoderPlus.EncoderEvent.CounterClockwise, function () {
    basic.showNumber(3)
    basic.showArrow(ArrowNames.West)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.Clockwise, function () {
    basic.showNumber(2)
    basic.showArrow(ArrowNames.East)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.CounterClockwise, function () {
    basic.showNumber(2)
    basic.showArrow(ArrowNames.West)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E3, rotaryEncoderPlus.EncoderEvent.Clockwise, function () {
    basic.showNumber(3)
    basic.showArrow(ArrowNames.East)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.ButtonPress, function () {
    basic.showNumber(2)
    basic.showArrow(ArrowNames.South)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.ButtonPress, function () {
    basic.showNumber(1)
    basic.showArrow(ArrowNames.South)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.Clockwise, function () {
    basic.showNumber(1)
    basic.showArrow(ArrowNames.East)
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E3, rotaryEncoderPlus.EncoderEvent.ButtonPress, function () {
    basic.showNumber(3)
    basic.showArrow(ArrowNames.South)
})
rotaryEncoderPlus.connectEncoder1()
rotaryEncoderPlus.connectEncoder2()
rotaryEncoderPlus.connectEncoder3()

```

## Acknowledgements

Forked from [Tinkertanker/pxt-rotary-encoder-ky040](https://github.com/tinkertanker/pxt-rotary-encoder-ky040).

## Supported targets

- for PXT/microbit
