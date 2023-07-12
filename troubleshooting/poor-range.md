---
description: Solve poor wireless range with your ZMK keyboard.
---

# Poor Range

If you're experiencing poor or degraded range with your ZMK keyboard, there are a few things you can try to improve it.

## Enable increased transmit power

In your ZMK `.conf` file, add the following line to increase the transmission power of your keyboard:

```conf
CONFIG_BT_CTLR_TX_PWR_PLUS_8=y
```

This will increase the transmit power of your keyboard by 8dBm, which should improve range.

## Disable 2M PHY

2M PHY is a higher speed BLE connection that reduces power usage but also reduces range. If you're experiencing poor range, you can try to disable 2M PHY to improve range.

In your ZMK `.conf` file, add the following line to disable 2M PHY:

```conf
CONFIG_BT_CTLR_PHY_2M=n
```

Disabling this will also affect the connection between the two halves of the keyboard.
