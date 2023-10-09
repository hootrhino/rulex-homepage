---
nav:
  title: Rule指南
  order: 1
group:
  title: 文档简介
  order: 1
---

# Rule 指南

RULEX 自带了 LUA 执行引擎，可以很方便的扩展 RULEX 的功能。经过整理，目前支持的函数以及其示例均包含在该站点，方便各位用户查阅使用。

:::info{title=提醒}
RULEX 在 2 个地方使用了 LUA，第一个场景是数据处理，主要用在设备上面,称之为规则 Lua；另一处是独立的 LUA 脚本执行器，用来实现更加强大的业务逻辑，称之为应用开发 Lua，而此处主要讲解针对数据处理的场景。
:::

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Button, Space } from 'antd';
export default () => (
  <Space>
    更多最新特性可以关注RULEX：
    <Button type="primary" href="https://github.com/hootrhino/rulex">
      RULEX主页
    </Button>
  </Space>
);
```

## 提前准备

```lua
print("Hello, Rulex!")
```

RULEX LUA 其实就是标准 Lua5.3，没有对 LUA 做任何修改，所以为了尽快掌握 RULEX LUA 扩展，建议大家先提前学习标准 Lua 的语法，下面给出几个常用的学习网站。

- Lua 官网：https://www.lua.org/pil/1.html
- 菜鸟 Lua：https://www.runoob.com/lua/lua-tutorial.html

:::warning{title=提醒}
为了安全，RULEX LUA 删除了 LUA 的原始 `OS` 模块。因此建议所有函数均使用 RULEX LUA 提供的接口。
:::

## 命名空间

RULEX 有专门的命名空间,参考下面的表格

| 命名空间 | 功能           | 示例                               |
| -------- | -------------- | ---------------------------------- |
| applib   | 轻量级应用专用 | applib:Read('uuid', "name", "arg") |
| rulelib  | 规则脚本专用   | rulelib:self()                     |

## RULEX Lua 结构

RULEX Lua 包含 3 个回调:`Success`、`Failed`、`Actions`,其中 `Success` 会在脚本调用成功的时候被加载，`Failed`会在失败时加载，其中参数为失败的错误信息，`Actions` 则是数据处理器，参数为设备的数据，可能是个字符串，Table，JSON。

```lua
-- Success
function Success()
end

-- Failed
function Failed(error)
    print("Error:", error)
end

-- Actions
Actions =
{
    function(data)
        return true, data
    end
}

```

需要注意的是`Actions`是个函数列表，可以实现链式回调，所以 `Actions` 可以这么写：

```lua
Actions =
{
    function(data)
        return true, data
    end,
    function(data)
        return true, data
    end,
    function(data)
        return true, data
    end
}
```

上面的例子包含了 3 个处理流程，会顺序执行，将上一个函数的执行结果交给下一个的参数，其中 `return` 的第一个值表示**是否向下传递**。如果是 `false` 则短路直接返回。

:::warning{title=提醒}
上面给出的教程可能会随着版本改变而变动，需要及时获取和关注社区最新通知，如果发现错误请及时建议。
:::
