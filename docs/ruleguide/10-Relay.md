---
nav:
  title: Rule指南
  order: 10

group:
  title: 本地硬件接口
  order: 10
---

# 继电器处理

:::warning
注意：该类接口只能在特定硬件上执行，注意其命名空间。
:::

## EEKIT-RhinoPi <Badge type="warning">EEKIT-RhinoPi</Badge>

```lua
Actions = {
    function(data)
            eekith3:GPIOSet(6, 0)
            time:Sleep(1000)
            eekith3:GPIOSet(6, 1)
            time:Sleep(1000)
        return true, data
    end
}
```
