# 前端视觉走查辅助工具

旨在帮助前端工程师在小程序界面重构阶段就能快速发现页面和视觉稿的差异，减少大量和设计师的沟通、走查成本。

# 小程序自定义组件开发指南

* 支持使用 less 语法编写 wxss 文件
* 使用 webpack 构建 js
* 支持自定义组件单元测试
* 支持 eslint
* 支持多入口构建

## 开发

1. 安装依赖：

```
npm install
```

2. 执行命令：

```
npm run dev
```

默认会在包根目录下生成 dev 目录，src 中的源代码会被构建并生成到 dev/components 目录下。如果需要监听文件变化动态构建，则可以执行命令：

```
npm run watch
```

> ps: 如果 dev 目录下已存在小程序 demo，执行`npm run dev`则不会再将 tools 下的 demo 拷贝到此目录下。而执行`npm run watch`则会监听 tools 目录下的 demo 变动并进行拷贝。

3. 生成的 dev 目录是一个小程序项目目录，以此目录作为小程序项目目录在开发者工具中打开即可查看自定义组件被使用的效果。

4. 进阶：

* 如果有额外的构建需求，可自行修改 tools 目录中的构建脚本。
* 内置支持 webpack、less 语法、sourcemap 等功能，默认关闭。如若需要可以自行修改 tools/config.js 配置文件中相关配置。
* 内置支持多入口构建，如若需要可自行调整 tools/config.js 配置文件的 entry 字段。
* 默认开启 eslint，可自行调整规则或在 tools/config.js 中注释掉 eslint-loader 行来关闭此功能。

## 目录结构

以下为推荐使用的目录结构，如果有必要开发者也可以自行做一些调整:

```
|--dev // 开发环境构建目录
|--dist // 生产环境构建目录
|--src // 源码
|   |--components // 通用自定义组件
|   |--images // 图片资源
|   |
|   |--xxx.js/xxx.wxml/xxx.json/xxx.wxss // 暴露的 js 模块/自定义组件入口文件
|
|--test // 测试用例
|--tools // 构建相关代码
|   |--demo // demo 小程序目录，开发环境下会被拷贝生成到 dev 目录中
|   |--config.js // 构建相关配置文件
|
|--gulpfile.js
```

> PS：对外暴露的 js 模块/自定义组件请放在 src 目录下，不宜放置在过深的目录。另外新增的暴露模块需要在 tools/config.js 的 entry 字段中补充，不然不会进行构建。