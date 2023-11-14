---
nav:
  title: Rule指南
  order: 13

group:
  title: 本地数据库
  order: 15
---

# 本地数据中心

```lua
function Main(arg)
	local Value, Err = datacenter:DBQuery("SELECT * FROM T")
	if Err ~= nil then
		stdlib:Debug(Value)
	end
	return 0
end
```
