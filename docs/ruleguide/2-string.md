---
nav:
  title: Rule指南
  order: 2

group:
  title: 字符串处理
  order: 2
---

# 字符串处理

## 文档简介

本文主要解释字符串处理相关操作函数。

### 字符串拼接

Lua 使用 `..` 来拼接字符串

```lua
print("hello" .. "world")
```

Lua 还可以使用 `..` 来拼接字符串和数字

```lua
print("hello" .. 3)
```

### 字符截取

Lua 使用 `string:SubStr(s, start, len)` 来截取字符串

#### 函数定义

```
string:SubStr(s, start, len) ->string
```

#### 示例

```lua
print(string:SubStr("hello",0,2))
```

## 注意事项

:::warning
注意：不支持 lua 的原生 string 函数，建议使用 RULEX LUA 支持。
:::
