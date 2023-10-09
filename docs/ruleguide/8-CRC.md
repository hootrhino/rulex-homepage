---
nav:
  title: Rule指南
  order: 8

group:
  title: 安全校验
  order: 8
---

# CRC 校验

```lua
Actions = {
  function (data)
      print("XOR: 0101=>", misc:XOR("0101", 0))
      print("XOR: 01010001=>", misc:XOR("01010001", 1))
      return true, data
  end
}
```
