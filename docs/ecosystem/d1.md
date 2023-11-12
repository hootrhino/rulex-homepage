---
nav:
  title: 应用生态
  order: 0
group:
  title: Rhino-EEKIT
  order: 0
---

# RULEX RhinoEEKIT

RULEX RhinoEEKIT 是一款用 RULEX 框架实现的边缘网关固件。

## 安装预编译包

下载地址：http://0.0.0.1

将安装包解压:

```sh
unzip rulex-arm32linux-${Version}.zip -d rulex
```

下面的脚本一定要在 root 权限下执行,或者使用 sudo。

- 安装
  ```sh
  ./rulexd.sh install
  ```
- 启动
  ```sh
  ./rulexd.sh start
  ```
- 状态
  ```sh
  ./rulexd.sh status
  ```
- 停止
  ```sh
  ./rulexd.sh stop
  ```
- 卸载
  ```sh
  ./rulexd.sh uninstall
  ```

### 操作演示

```sh
rer@revb-h3:~/Desktop/rulex$ unzip rulex-arm32linux-v0.6.2.zip -d rulex
Archive:  rulex-arm32linux-v0.6.2.zip
  End-of-central-directory signature not found.  Either this file is not
  a zipfile, or it constitutes one disk of a multi-part archive.  In the
  latter case the central directory and zipfile comment will be found on
  the last disk(s) of this archive.
unzip:  cannot find zipfile directory in one of rulex-arm32linux-v0.6.2.zip or
        rulex-arm32linux-v0.6.2.zip.zip, and cannot find rulex-arm32linux-v0.6.2.zip.ZIP, period.
rer@revb-h3:~/Desktop/rulex$ unzip rulex-arm32linux-v0.6.2.zip -d rulex
Archive:  rulex-arm32linux-v0.6.2.zip
  inflating: rulex/rulex
  inflating: rulex/LICENSE
  inflating: rulex/rulex.ini
  inflating: rulex/rulexd.sh
rer@revb-h3:~/Desktop/rulex$ ll
total 16540
drwxrwxrwx 3 rer rer     4096 Sep  4 21:00 ./
drwxrwxrwx 3 rer rer     4096 May 19  2022 ../
drwxrwxr-x 2 rer rer     4096 Sep  4 21:00 rulex/
-rw-rw-r-- 1 rer rer 16921343 Sep  4 21:00 rulex-arm32linux-v0.6.2.zip
rer@revb-h3:~/Desktop/rulex$ cd rulex/
rer@revb-h3:~/Desktop/rulex/rulex$ ll
total 45848
drwxrwxr-x 2 rer rer     4096 Sep  4 21:00 ./
drwxrwxrwx 3 rer rer     4096 Sep  4 21:00 ../
-rwxrwxrwx 1 rer rer    34523 Sep  4 20:51 LICENSE*
-rwxrwxrwx 1 rer rer 46891964 Sep  4 20:52 rulex*
-rwxrwxrwx 1 rer rer     2104 Sep  4 20:51 rulexd.sh*
-rwxrwxrwx 1 rer rer     2605 Sep  4 20:51 rulex.ini*
rer@revb-h3:~/Desktop/rulex/rulex$ ./rulexd.sh install
This script must be run as root
rer@revb-h3:~/Desktop/rulex/rulex$ sudo ./rulexd.sh install
Created symlink /etc/systemd/system/multi-user.target.wants/rulex.service → /etc/systemd/system/rulex.service.
Rulex service has been created and extracted.
rer@revb-h3:~/Desktop/rulex/rulex$ sudo ./rulexd.sh start
RULEX started as a daemon.
rer@revb-h3:~/Desktop/rulex/rulex$ sudo ./rulexd.sh restart
RULEX started as a daemon.
rer@revb-h3:~/Desktop/rulex/rulex$ sudo ./rulexd.sh stop
Service Rulex has been stopped.
rer@revb-h3:~/Desktop/rulex/rulex$ sudo ./rulexd.sh uninstall
Removed /etc/systemd/system/multi-user.target.wants/rulex.service.
Rulex has been uninstalled.
```

### 源码编译

```sh
git clone https://github.com/hootrhino/rulex.git
cd rulex
make
```

:::warning{title=提示}
本项目是纯 go 开发，请提前安装好开发环境。
:::

## 使用

打开浏览器地址栏输入：`http://安装的主机的IP:2580`，就可以打开登录界面，默认账号`hootrhino`,密码`12345678`。
