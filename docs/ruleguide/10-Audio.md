---
nav:
  title: Rule指南
  order: 10

group:
  title: 本地硬件接口
  order: 10
---

# 本地音频播放

:::warning
注意：该类接口只能在特定系统上执行，注意其命名空间。
:::

## EEKIT-RhinoPi <Badge type="warning">EEKIT-RhinoPi</Badge>

```lua
Actions = {
  function (data)
    audio:PlayMusic('/home/Desktop/1.mp3')
    return true, data
  end
}
```
