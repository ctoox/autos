# autos — 项目上下文

## 定位
3D 模型代码化收集器，通过 WorkBuddy 平台调用国产大模型（底层路由 DeepSeek/Qwen/GLM）将 3D 模型转为代码表示，持续调优中。

## 仓库
- GitHub: `github.com/ctoox/autos`
- 远程: origin → github.com/ctoox/autos.git

## 关键约束
- 模型调用走 WorkBuddy 云服务 LLM 接口（`workbuddy_cloudservice_llm`），不直接调外部 API
- 底层路由国产模型：DeepSeek / Qwen / GLM，不用 GPT/Claude/Gemini
- 模型来源：xlab（git.xen）、vehicle（车辆）、teleagent（待确认）
- 二进制模型文件用 .gitignore 忽略，通过脚本管理导入

## 目录
- models/<category>/<name>/ — 每个模型一个目录（source/ code/ preview/ meta.json）
- models/xlab/ — xlab 项目（git.xen 来源）
- models/vehicle/ — 车辆模型
- models/teleagent/ — teleagent 项目
- scripts/ — 导入与代码化脚本
- docs/ — pipeline 设计与调优记录
- catalog.json — 全局模型索引
