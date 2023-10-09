---
nav:
  title: Rule指南
  order: 6

group:
  title: 数据转发与桥接
  order: 6
---

# GRPC 编解码

## Grpc 规范

如果你有私有协议需要独立部署，可以使用 GRPC 来和 RULEX 交互。此处有一个私有协议 GRPC server Proto 模板：

```proto
syntax = "proto3";
option go_package = "./;rulexrpc";
option java_multiple_files = false;
option java_package = "rulexrpc";
option java_outer_classname = "XStream";

package rulexrpc;
//
// 自定义编解码器, 使用GRPC协议通信
//
service Codec {
  // 编码
  rpc Decode (CodecRequest) returns (CodecResponse) {}
  // 解码
  rpc Encode (CodecRequest) returns (CodecResponse) {}
}

message CodecRequest {
  bytes value = 1;
}

message CodecResponse {
  int32 code = 1;
  string message = 2;
  bytes data = 3;
}

```

协议文件非常简单，可以用你熟悉的任何语言去实现这个 [proto](https://github.com/hootrhino/rulex/blob/dev/v0.6.4/component/rulexrpc/xcodec.proto) 文件。关于如何使用 grpc 编译 proto 文件此处不做赘述。

## Lua 交互

新建一个 GRPC 编解码目标以后即可调用。

### 编码

```lua
Actions = {
function(data)
    print(rulexlib:RPCENC('uuid', data))
    return true, data
end
}
```

### 解码

```lua
Actions = {
function(data)
    print(rulexlib:RPCDEC('uuid', data))
    return true, data
end
}
```
