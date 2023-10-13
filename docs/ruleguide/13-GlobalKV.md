---
nav:
  title: Rule指南
  order: 13

group:
  title: 全局缓存器
  order: 13
---

# 全局缓存器

```lua
Actions = {
    function(args)
        kv:VSet("key", rulexlib:T2J({ name = "rulex", data = "ok"}))
        print(kv:VGet("key"))
        return true, args
    end
}
```
