---
nav:
  title: Rule指南
  order: 13

group:
  title: Modbus操作
  order: 14
---

# Modbus 操作

## 简介

本文主要展示 RULEX 的 MODBUS 读写控制能力，为了简化，直接将 Modbus 的操作设计为功能码名称函数，比如 F3 代表读寄存器。

## 5 Write Single Coil

```lua
function Main(arg)
  local UUID = 'DEVICE9KXIGK'
  while true do
      -- UUId , ModbusId, StartAddr, Value:00|01
    local err1 = modbus:F5(UUID, 1, 0, "00")
    time:Sleep(1000)
    local err2 = modbus:F5(UUID, 1, 0, "01")
    time:Sleep(1000)
  end
  return 0
end
```

## 6 Write Single Holding Register

```lua

function Main(arg)
  local UUID = 'DEVICE9KXIGK'
  while true do
    local err1 = modbus:F6(UUID, 1, 0, "AABB")
    time:Sleep(1000)
    local err2 = modbus:F6(UUID, 1, 0, "CCDD")
    time:Sleep(1000)
  end
  return 0
end
```

## 15 Write Multiple Coils

```lua
function Main(arg)
  local UUID = 'DEVICE9KXIGK'
  while true do
    local err1 = modbus:F15(UUID, 1, 0, 8, "AA")
    time:Sleep(1000)
    local err2 = modbus:F15(UUID, 1, 0, 8, "55")
    time:Sleep(1000)
  end
  return 0
end
```

## 16 Write Multiple Holding Registers

```lua
function Main(arg)
  local UUID = 'DEVICE9KXIGK'
  while true do
    local err1 = modbus:F16(UUID, 1, 0, 2, "AABBCCDD")
    time:Sleep(1000)
    local err2 = modbus:F16(UUID, 1, 0, 2, "11223344")
    time:Sleep(1000)
  end
  return 0
end
```
