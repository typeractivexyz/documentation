---
description: Fix your split ZMK keyboard halves not pairing.
---

# Split Halves Won't Connect

If your right half can't type but your left half does, the two halves are not properly connected.

## Reset both halves

The first thing to try is to reset both halves at the same time. This will help the halves find and pair to each other. You can do this by pressing the reset buttons on each side at the same time or by shorting the reset pins to ground on each side at the same time.

## Reset bonds on both halves

If you still can't get them connected, the bonds between them are likely messed up. To fix this, you can clear the bonds using the steps outlined in the [ZMK documentation](https://zmk.dev/docs/troubleshooting#split-keyboard-halves-unable-to-pair). After completing these steps, try resetting both halves again.
