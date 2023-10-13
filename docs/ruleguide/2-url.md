---
nav:
  title: Rule指南
  order: 2

group:
  title: 字符串处理
  order: 2
---

# URL 处理

## 文档简介

本文档主要解释 URL 字符串处理函数使用。

## 函数定义

```lua
    url:Parse(string) -> List
```

## 操作示例

```lua
Actions = {
function(data)
    print(url:Parse("http://www.hootrhino.com"))
    -- {"http", "www.hootrhino.com"}
    return true, data
end
}
```

## 注意事项
