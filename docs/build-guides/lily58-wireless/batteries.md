---
sidebar_position: 4
---

# Batteries

Installing the batteries is a simple but particular step. This guide will go over the positioning and installation of them.

:::caution
This guide is meant for the batteries that we sell on our store. If you are an international customer sourcing your batteries yourself, please follow the tips at the bottom.
:::

## Video Tutorial

<iframe style={{maxWidth: "640px", aspectRatio: "16/9"}} width="100%" height="auto" src="https://www.youtube.com/embed/51evC7GNYP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Battery Orientation

1. Position so the yellow taped side is on the bottom rather than top
2. Flip the battery so the wires are on the inside of the PCB
3. The battery wire should be sliding between the nice!view socket and the inner socket for the nice!nano

## Installing the Battery

1. Turn the power switch **off** by pulling the switch down on the side
2. Plug the battery's JST connector into its jack on the PCB
3. You may have some excess wire due to tolerances. Try to push it in so it won't interfere with the switch plate without damaging the wire

## Completing the Stack

1. Now that the battery is in, you can insert your nice!nano back into its sockets
2. If you have a nice!view, you can insert it into its sockets

## Important Battery Information

 - When charging the battery, you need to have the power switch **on**. The nice!nano will not charge the battery when the switch is off.
 - Charging will likely take about two hours to complete for each side.
 - Your left half should last around a week with a 110mAh battery. Your right half should last around a month. This is with displays or no displays.
   - If it's severely less than this, there are a few possibilities.
     - You're leaving the keyboard on when your device is off. This causes the keyboard to constantly advertise and will drain the battery.
     - You're not turning the keyboard off when you're transporting it. In transit, keys are often held down, which uses more power.
     - You're connected to a lot of devices. The more devices you're connected to, the more power the nice!nano needs to use to maintain those connections.
     - You have a short somewhere on your keyboard. This is harder to diagnose, and you should join our [Discord server](https://typeractive.xyz/discord) for help.
 - The reported battery percentage is not accurate. It's an estimate based on the voltage of the battery. Your battery may never reach exactly 100%, and it's not a cause for concern, as long as it gets to at least ~80%.

## Wrap Up

You have your batteries, nice!nano, and nice!view installed! In the next guide, we'll go over the display cover.

## International Customers

While we've started shipping batteries to some international countries, unfortunately, we cannot ship batteries to every country. Because of this, here's a list of helpful tips for sourcing your batteries:

 - Our battery manufacturer has started selling on AliExpress. If you can deal with the slow shipping, you can get the batteries from them directly. [Here's the link](https://www.aliexpress.us/item/3256805162053912.html). Make sure to select the battery with the black connector; the large image does not always correspond to the selected option. Currently, it's the 3rd option.
 - Pay attention to polarity! Battery polarity is not standardized. Compare the battery you're looking to purchase with the ones we sell to ensure you're getting the right polarity.
 - Amazon and AliExpress are your best bets for purchasing the batteries you need from our experience. 
   - *If you find a better retailer in your country, let us know so we can list it here*
 - If you want the battery to fit underneath the nice!nano, you can't go much larger than 301230. It can *maybe* fit a 401230, but it's a tight fit.
   - Battery names are their dimensions. 301230 is 3.0mm x 12mm x 30mm.
 - If you don't want to deal with sourcing the JST connector, you can solder the battery directly to the B+ and B- pads on the nice!nano, but you'll no longer be able to use the power switch.

If you have any more questions, please feel free to ask on our [community Discord server](https://typeractive.xyz/discord). We're happy to help!
