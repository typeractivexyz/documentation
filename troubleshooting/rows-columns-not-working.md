---
description: Get troubleshooting tips to fix row(s) or column(s) not working on your keyboard.
---

# Row(s) or Column(s) Not Working

This is one of the most common issues that you'll run into when building your keyboard. The first thing to know is that this is almost always a hardware issue. The second thing to know is that it's almost always a soldering issue.

Each row and column is controlled by a single pin on the nice!nano. The most likely case is that the pin is not soldered properly or that there's a short between the pin and another pin.

## Identifying the pins for the row or column

To identify which pin goes with which row/column, you'll want to check the schematic of your keyboard and match it with the nice!nano pins. We've conveniently done this for each of our kits. Check your kit's [build guide](/build-guides) troubleshooting page (last page of the kit's guide) to find which pin goes with which row/column.

## Checking the solder joints

Once you've identified the pins, check to make sure the pin is soldered well. See the [Adafruit Soldering Guide](https://learn.adafruit.com/adafruit-guide-excellent-soldering/making-a-good-solder-joint) to learn how to make a good joint. Make sure the joint is good on both the nice!nano side as well as the PCB side.

## Checking for shorts

If the solder joints look good, the next thing to check for is shorts. A short is when two pins are connected together when they shouldn't be. This can happen if you have a solder bridge between two pins or if you have a solder bridge between a pin and a nearby trace. If you have a multimeter, you can check to see if you have a short by putting the multimeter in continuity mode and checking if any pins are connected. Make sure the keyboard is powered off when doing this.

## Still not working?

If you've tried all of the above and the row or column is still not working, reach out to us on [Discord](https://typeractive.xyz/discord) for help!
