// @ts-nocheck  // hide microbit-specific API errors when developing in VS Code
// tests go here; this will not be compiled when this package is used as a library

// Example: two rotary encoders
// Encoder 1 uses preset pins (standard KY-040), Encoder 2 uses custom pins with active-high switch (e.g. RGB encoder)

let item1 = 5;
let item2 = 5;

RotaryEncoderPlus.initE1();
RotaryEncoderPlus.initAdvanced(EncoderID.E2, DigitalPin.P8, DigitalPin.P9, DigitalPin.P13, SwitchType.ActiveHigh);

basic.forever(() => {
    basic.showNumber(item1);
    basic.pause(1000);
    basic.showNumber(item2);
    basic.pause(1000);
})

RotaryEncoderPlus.onEvent(EncoderID.E1, EncoderEvent.ButtonPress, () => {
    item1 = 5;
    basic.showIcon(IconNames.Heart);
})
RotaryEncoderPlus.onEvent(EncoderID.E1, EncoderEvent.Clockwise, () => {
    item1++;
})
RotaryEncoderPlus.onEvent(EncoderID.E1, EncoderEvent.CounterClockwise, () => {
    item1--;
})

RotaryEncoderPlus.onEvent(EncoderID.E2, EncoderEvent.ButtonPress, () => {
    item2 = 5;
    basic.showIcon(IconNames.SmallHeart);
})
RotaryEncoderPlus.onEvent(EncoderID.E2, EncoderEvent.Clockwise, () => {
    item2++;
})
RotaryEncoderPlus.onEvent(EncoderID.E2, EncoderEvent.CounterClockwise, () => {
    item2--;
})
