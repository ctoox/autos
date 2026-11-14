# autos — 3D 模型代码化收集器

> 专注 3D 模型的代码化表示与调优，使用国产模型（如 DeepSeek、Qwen、GLM 等），不依赖国外模型。

## 项目目标

将 3D 模型转化为代码表示（code-based 3D representation），实现：

1. **模型收集** — 按来源/类别归档 3D 模型源文件与对应的代码化输出
2. **代码化** — 将 3D 几何/材质/动画转化为可读、可编辑的代码（JS/TS 生成式描述）
3. **国产模型驱动** — 使用国产大模型（DeepSeek、Qwen、GLM 等）进行理解与生成，不使用 GPT/Claude 等国外模型
4. **持续调优** — 迭代优化代码化质量、压缩比、渲染还原度

## 目录结构

```
autos/
├── models/              # 模型源文件与元数据
│   ├── xlab/            # xlab 项目模型（来自 git.xen）
│   └── vehicle/         # 车辆模型
├── scripts/             # 代码化脚本与工具链
├── docs/                # 文档与调优记录
├── catalog.json         # 模型索引目录
└── README.md
```

## 模型来源

| 来源 | 地址 | 说明 |
| --- | --- | --- |
| xlab | `git.xen` | xlab 项目的 3D 模型 |
| vehicle | 本地 / 待导入 | 车辆 3D 模型 |

## 模型收录规范

每个模型目录需包含：

```
models/<category>/<model-name>/
├── source/              # 原始模型文件（.glb/.gltf/.obj 等）
├── code/                # 代码化输出（.js/.ts 生成式描述）
├── preview/             # 预览截图
└── meta.json            # 元数据
```

### meta.json 格式

```json
{
  "name": "model-name",
  "category": "xlab",
  "source": "git.xen/xen/xlab",
  "format": "glb",
  "vertices": 0,
  "triangles": 0,
  "materials": 0,
  "model": "deepseek-v3",
  "status": "collecting",
  "created": "2026-11-15",
  "notes": ""
}
```

## 国产模型配置

使用的国产大模型：

- **DeepSeek** (deepseek-v3 / deepseek-r1) — 代码生成与理解
- **Qwen** (qwen-max / qwen-coder) — 代码化与补全
- **GLM** (glm-4-plus) — 辅助理解

> 明确不使用 GPT、Claude、Gemini 等国外模型。

## 状态

🔄 持续调优中 — 当前阶段为模型收集与代码化 pipeline 搭建。
