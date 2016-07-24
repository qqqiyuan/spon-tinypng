## Showjoy spon tinypng plugin

### 插件介绍
#### 图片无损压缩插件，使用tinypng的API

### 使用介绍

#### 方式一：
命令 spon tinypng 
将当前目录下的img文件夹下的所有图片进行压缩，压缩后的图片存放在img同级的dist文件夹下

#### 方式二：
命令 spon tinypng path
参数 path 是压缩图片的目标文件夹
将path目录下的图片进行压缩，压缩后的图片存放在path上一级的dist文件夹下
如 spon tinypng src/img

#### 方式三：
命令 spon tinypng img file
参数 img 指代只对单个文件进行压缩 
参数 file 指代可通过地址访问的图片文件
如 spon tinypng img src/img/file.png
如 spon tinypng img src/img/file.png

