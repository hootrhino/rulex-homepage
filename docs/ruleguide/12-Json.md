---
nav:
  title: Rule指南
  order: 12

group:
  title: 数据格式
  order: 12
---

# JSON 处理

Lua Table 和 JSON 的互相转换使用`json:T2J`和`json:J2T`两个函数。

## 函数定义

- json:T2J(table) -> string
- json:T2J(string) -> table

## 示例

1. Table 转 JSON

```lua
Actions =
{
    function(data)
      local jsont = {
        name = "rulex"
      }
      print(json:T2J(jsont))
    end
}
```

2. Json 转 Table

```lua
Actions =
{
    function(data)
      print(rulexlib:J2T('{\"name\":\"rulex\"}')['name'])
    end
}
```

:::warning{title=提醒}
`json:T2J`和`json:J2T`两个函数非常重要，几乎贯穿整个 rulex 的脚本操作，因此需要非常熟练使用。
:::
