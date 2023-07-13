---
description: Fix your ZMK keyboard that won't pair.
---

# Keyboard Won't Pair

If your keyboard won't pair, there are a few steps to work through so that you can understand the ZMK pairing process and troubleshoot your issue.

## Understand the ZMK pairing process

ZMK's wireless BLE system uses what it calls "profiles" to manage which device your keyboard is currently connected to. This allows increased security, peace of mind that your current profile is the only one getting your inputs, and the ability to connect and switch between multiple devices at once. There's a learning curve to this system, but once you understand it, it's very powerful.

### The Profile

Let's first define what a profile is.

A profile represents a slot for a device to be paired and remembered at. When a profile is active but unpaired, it will advertise itself waiting for the device to connect. Once it connects, it saves a "bond" which is a secure key that allows the device to reconnect to the keyboard without having to re-pair.

This bond is two-way. If you want to clear the bond to let the profile connect to another device, you'll need to clear the bond on both the keyboard and the device (usually done by deleting or removing the keyboard from the BLE menu). Similarly, if you clear the bond on the existing device, you'll need to clear the bond on the keyboard to allow it to connect to the device again. This is because if either side of the bond is cleared, the bond is no longer valid and the existing device will not be able to connect.

Clearing a bond on the keyboard side is done by pressing the `&bt BT_CLR` button on the keyboard. This will clear the bond for the currently active profile. You can find where this key is on your keymap by searching for `BT_CLR` in your keymap file. If you don't have a custom keymap we have our default keymap in image form on our build guide's firmware page!

To better visualize this profile, see the video below:

<video width="100%" controls style={{maxWidth: '600px'}}>
  <source src="/video/zmk-ble.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

### Multiple Profiles

Now that you understand what a profile is, let's talk about multiple profiles.

ZMK, by default, has five different profiles. Whichever is the active one takes on the role of pairing new devices and sending out keypresses. To switch between profiles, you can use the `&bt BT_SEL <profile number>` key. This will switch to the profile number you specify where 0 is the first profile and 4 is the fifth profile. You can find where this key is on your keymap by searching for `BT_SEL` in your keymap file. If you don't have a custom keymap we have our default keymap in image form on our build guide's firmware page! Alternatively you can use the `&bt BT_NXT` and `&bt BT_PRV` keys to cycle through the profiles.

One special case to note is that a device can not be bonded to multiple profiles. This sometimes confuses people when they're unable to pair their device to an open profile. This is often because there is an existing bond on a different profile. You can cycle through every profile and clear the bond on each one to ensure that there are no existing bonds.

## Troubleshooting

Now that you understand the ZMK pairing process, let's talk about troubleshooting. If you've ensured that the profile you're trying to pair to is active without any existing bonds try troubleshooting with the following steps:

1. Ensure the keyboard is on.
   - When pressing the reset button, you should see the blue LED blink to indicate the nice!nano is getting power.
2. Make sure your device supports *at least* BLE version 4.2.
   - If your device does not support BLE 4.2+, it will not be able to pair with your keyboard.
3. If you're using a split keyboard, make sure you're pairing to the left half, the right half does not connect to your device.
   - See [Right Half Not Working](/troubleshooting/right-half-not-working) for more information.
4. If you still cannot connect, try pairing to a mobile phone. They have better BLE support than most laptops and desktops and can help you determine if the issue is with your keyboard or your device.
   - If you can pair to your phone but not your device, the issue is likely with your device. Try updating drivers or try an alternate BLE card
5. Reach out to us on [Discord](https://typeractive.xyz/discord) for help!
