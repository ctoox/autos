# autos — 项目上下文

## 定位
3D 模型代码化收集器，用国产大模型（DeepSeek/Qwen/GLM）将 3D 模型转为代码表示，持续调优中。

## 仓库
- GitHub: `github.com/ctoox/autos`
- 远程: origin → github.com/ctoox/autos.git

## 关键约束
- 只用国产模型，不用 GPT/Claude/Gemini
- 模型来源：xlab（git.xen）、vehicle（车辆）
- 二进制模型文件用 .gitignore 忽略，通过脚本管理导入

## 目录
- models/<category>/<name>/ — 每个模型一个目录（source/ code/ preview/ meta.json）
- scripts/ — 导入与代码化脚本
- docs/ — pipeline 设计与调优记录
- catalog.json — 全局模型索引
