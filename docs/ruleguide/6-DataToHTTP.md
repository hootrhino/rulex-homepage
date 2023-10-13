---
nav:
  title: Rule指南
  order: 6

group:
  title: 数据转发与桥接
  order: 6
---

# HTTP 编解码

## 文档简介

## 函数定义

```lua
data:ToHttp(uuid::string, json::string) -> string
```

## 操作示例

```lua
Actions = {
    function(data)
        local LuaTable = { name = "rulex", data = "ok"}
        data:ToHttp("uuid", rulexlib:T2J(LuaTable))
        return true, data
    end
}
```
