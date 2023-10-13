---
nav:
  title: Rule指南
  order: 6

group:
  title: 数据转发与桥接
  order: 6
---

# 持久化 MongoDB

首先新建好 Mongodb 的资源
![1697164537240](./image/6-DataToMongodb/1697164537240.png)
然后编写脚本：

```lua
Actions = {
    function(args)
        local LuaTable = { name = "rulex", data = "ok"}
        data:ToMongo("uuid", rulexlib:T2J(LuaTable))
        return true, args
    end
}
```

数据展示：
![1697164394242](./image/6-DataToMongodb/1697164394242.png)
