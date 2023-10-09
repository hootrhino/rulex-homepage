---
nav:
  title: Rule指南
  order: 2

group:
  title: 字符串处理
  order: 2
---

# 字符串处理

## 拼接

Lua 使用 `..` 来拼接字符串

```lua
print("hello" .. "world")
```

Lua 还可以使用 `..` 来拼接字符串和数字

```lua
print("hello" .. 3)
```

## 截取

Lua 使用 `string:SubStr(s, start, len)` 来截取字符串

```lua
print(string:SubStr("hello",0,2))
```
