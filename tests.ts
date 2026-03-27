// @ts-nocheck  // hide microbit-specific API errors when developing in VS Code
// tests go here; this will not be compiled when this package is used as a library

// Example: two rotary encoders
// Encoder 1 uses preset pins (standard KY-040), Encoder 2 uses custom pins with active-high switch (e.g. RGB encoder)

let item1 = 5;
let item2 = 5;

rotaryEncoderPlus.connectEncoder1();
rotaryEncoderPlus.connectAdvanced(rotaryEncoderPlus.EncoderID.E2, DigitalPin.P8, DigitalPin.P9, DigitalPin.P13, rotaryEncoderPlus.SwitchType.ActiveHigh);

basic.forever(() => {
    basic.showNumber(item1);
    basic.pause(1000);
    basic.showNumber(item2);
    basic.pause(1000);
})

rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.ButtonPress, () => {
    item1 = 5;
    basic.showIcon(IconNames.Heart);
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.Clockwise, () => {
    item1++;
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E1, rotaryEncoderPlus.EncoderEvent.CounterClockwise, () => {
    item1--;
})

rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.ButtonPress, () => {
    item2 = 5;
    basic.showIcon(IconNames.SmallHeart);
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.Clockwise, () => {
    item2++;
})
rotaryEncoderPlus.onEvent(rotaryEncoderPlus.EncoderID.E2, rotaryEncoderPlus.EncoderEvent.CounterClockwise, () => {
    item2--;
})
