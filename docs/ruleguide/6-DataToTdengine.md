---
nav:
  title: Rule指南
  order: 6

group:
  title: 数据转发与桥接
  order: 6
---

# 持久化 Tdengine

```lua
Actions = {
    function(data)
        local LuaTable = { name = "rulex", data = "ok"}
        data:ToTdengine("uuid", rulexlib:T2J(LuaTable))
        return true, data
    end
}
```
