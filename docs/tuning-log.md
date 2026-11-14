# 调优记录

记录 3D 模型代码化的调优过程与结果。

## 模型配置

调用方式：**WorkBuddy 云服务 LLM 接口**（`workbuddy_cloudservice_llm`），通过 `applicationId` 鉴权。

底层路由国产模型选型：

| 模型 | 用途 | 优势 | 当前状态 |
| --- | --- | --- | --- |
| DeepSeek-V3 | 代码生成、几何理解 | 代码能力强，推理好 | 主力 |
| DeepSeek-R1 | 复杂推理、结构分析 | 深度推理 | 实验中 |
| Qwen-Max | 通用理解 | 上下文长 | 备选 |
| Qwen-Coder | 代码化补全 | 代码专用 | 备选 |
| GLM-4-Plus | 辅助理解 | 中文好 | 辅助 |

> 所有模型通过 WorkBuddy 平台统一调用，不直接调外部 API。不使用 GPT/Claude/Gemini。

## 调优日志

### 2026-11-15

- 项目初始化
- 确定使用国产模型路线，通过 WorkBuddy 平台调用（DeepSeek 为主力）
- 建立目录结构：xlab（git.xen 来源）、vehicle（车辆模型）、teleagent（待确认来源）
- 待办：导入 xlab 源模型、导入车辆模型、导入 teleagent 模型、搭建代码化 pipeline
- 待办：在 WorkBuddy 云服务注册应用获取 applicationId，用于后续 LLM 调用
