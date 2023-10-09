---
nav:
  title: LUA指南
  order: 1
group:
  title: 文档简介
  order: 1
---

# RULEX LUA 指南

## 网站简介

RULEX 自带了 LUA 执行引擎，可以很方便的扩展 RULEX 的功能。经过整理，目前支持的函数以及其示例均包含在该站点，方便各位用户查阅使用。

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

RULEX LUA 其实就是标准 Lua5.3，没有任何修改，所以为了尽快掌握 RULEX LUA 扩展，建议大家先提前学习标准 Lua 的语法，下面给出几个常用的学习网站。

- Lua 官网：https://www.lua.org/pil/1.html
- 菜鸟 Lua：https://www.runoob.com/lua/lua-tutorial.html

RULEX 有专门的命名空间,参考下面的表格

| 命名空间 | 功能           | 示例                               |
| -------- | -------------- | ---------------------------------- |
| applib   | 轻量级应用专用 | applib:Read('uuid', "name", "arg") |
| rulelib  | 规则脚本专用   | rulelib:self()                     |

## 库函数表

## 基础公共库

- 字符串处理
- URL 处理

## 时间处理库

- 获取时间
- 获取时间戳

## 编解码库

- 二进制处理
- 十六进制处理
- 位处理处理

## 数字处理

- 浮点取小数位
- 二进制转浮点

## 数据筛选库

- JQ 筛选 JSON

## 数据推送库

- 数据推送到 HTTP 服务端
- 数据推送到 MQTT 服务端
- 数据推送到 UDP 服务端
- 数据推送到 Tdengine 服务端
- 数据推送到 Mongodb 服务端
- 数据推送到 Grpc 服务端

## 设备交互库

- 读取数据
- 写入数据
- 控制设备

## 加密处理

- 数据 CRC 校验
- 数据 XOR 校验

## 可视化库

- 数据推送到大屏

## 硬件库

- GPIO 处理
- 播放音频
- 继电器处理

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Alert } from 'antd';
export default () => (
  <Alert
    type="warning"
    message="上面给出的目录列表可能会随着版本改变而变动，需要及时获取和关注社区最新通知。"
  ></Alert>
);
```
