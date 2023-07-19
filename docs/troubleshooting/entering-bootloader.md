---
description: Learn how to enter the bootloader on your nice!nano.
---

# Entering the Bootloader

Once you've flashed the nice!nano for the first time, you'll need to double-tap the reset button to get back into it to flash it again.

## Flashing New Firmware

1. Plug in your nice!nano to your computer.
2. Enter the bootloader by double-tapping the reset button.
3. Drag and drop the `.uf2` file onto the `NICENANO` drive or copy it with your terminal.
4. After flashing is complete, the drive will disappear and the nice!nano will reboot. <br/> <small>Your computer may report an error when transferring the file, you can likely ignore this.[^1]</small> 
5. If you haven't yet, you can turn the power switch **on** by pushing it up on the side of the keyboard.

[^1]: There is a known issue with transferring using Finder on macOS version 13.0. Upgrade to 13.1 to fix this issue.

## Unable to Enter Bootloader

If double-tapping the reset button does not enter the bootloader, there are a few things you can try:

1. Try a different USB cable
2. Try a different device
3. Use metal tweezers to manually short the RST and GND pins on the nice!nano. You'll want to double tap this way, too

If none of the above works, you'll want to check out [this troubleshooting guide](https://nicekeyboards.com/docs/nice-nano/troubleshooting#my-nicenano-seems-to-be-acting-up-and-i-want-to-re-flash-the-bootloader) from Nice Keyboards.
