// tests go here; this will not be compiled when this package is used as a library

// Example: two rotary encoders
// Encoder 1 on P8/P9/P11, Encoder 2 on P12/P13/P14

let item1 = 5;
let item2 = 5;

RotaryEncoder.init(EncoderID.E1, DigitalPin.P8, DigitalPin.P9, DigitalPin.P11);
RotaryEncoder.init(EncoderID.E2, DigitalPin.P12, DigitalPin.P13, DigitalPin.P14);

basic.forever(() => {
    basic.showNumber(item1);
    basic.pause(1000);
    basic.showNumber(item2);
    basic.pause(1000);
})

RotaryEncoder.onEvent(EncoderID.E1, EncoderEvent.ButtonPress, () => {
    item1 = 5;
    basic.showIcon(IconNames.Heart);
})
RotaryEncoder.onEvent(EncoderID.E1, EncoderEvent.Clockwise, () => {
    item1++;
})
RotaryEncoder.onEvent(EncoderID.E1, EncoderEvent.CounterClockwise, () => {
    item1--;
})

RotaryEncoder.onEvent(EncoderID.E2, EncoderEvent.ButtonPress, () => {
    item2 = 5;
    basic.showIcon(IconNames.SmallHeart);
})
RotaryEncoder.onEvent(EncoderID.E2, EncoderEvent.Clockwise, () => {
    item2++;
})
RotaryEncoder.onEvent(EncoderID.E2, EncoderEvent.CounterClockwise, () => {
    item2--;
})
