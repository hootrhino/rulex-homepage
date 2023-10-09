---
nav:
  title: Rule指南
  order: 6

group:
  title: 数据转发与桥接
  order: 6
---

# 桥接 MQTT Broker

```lua
Actions = {
    function(data)
        local LuaTable = { name = "rulex", data = "ok"}
        rulexlib:DataToMqtt("uuid", rulexlib:T2J(LuaTable))
        return true, data
    end
}
```
