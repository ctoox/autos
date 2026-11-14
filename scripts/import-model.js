#!/usr/bin/env node
/**
 * 模型导入脚本 — 将 3D 模型源文件导入到 models/ 目录
 * 用法: node scripts/import-model.js <source-file> <category> [name]
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const MODELS_DIR = path.join(ROOT, "models");

const SUPPORTED_FORMATS = [".glb", ".gltf", ".obj", ".fbx", ".stl", ".3mf", ".dae", ".ply"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getModelStats(filePath) {
  // 占位：实际需要解析模型文件获取顶点/面数
  const stat = fs.statSync(filePath);
  return {
    size: stat.size,
    vertices: 0,
    triangles: 0,
    materials: 0,
  };
}

function main() {
  const [, , sourceFile, category, nameArg] = process.argv;

  if (!sourceFile || !category) {
    console.error("用法: node scripts/import-model.js <source-file> <category> [name]");
    console.error("示例: node scripts/import-model.js ./car.glb vehicle my-car");
    process.exit(1);
  }

  const absPath = path.resolve(sourceFile);
  if (!fs.existsSync(absPath)) {
    console.error(`文件不存在: ${absPath}`);
    process.exit(1);
  }

  const ext = path.extname(absPath).toLowerCase();
  if (!SUPPORTED_FORMATS.includes(ext)) {
    console.error(`不支持的格式: ${ext}，支持: ${SUPPORTED_FORMATS.join(", ")}`);
    process.exit(1);
  }

  const name = nameArg || path.basename(absPath, ext);
  const modelDir = path.join(MODELS_DIR, category, name);
  const sourceDir = path.join(modelDir, "source");
  const codeDir = path.join(modelDir, "code");
  const previewDir = path.join(modelDir, "preview");

  ensureDir(sourceDir);
  ensureDir(codeDir);
  ensureDir(previewDir);

  // 复制源文件
  const destFile = path.join(sourceDir, path.basename(absPath));
  fs.copyFileSync(absPath, destFile);

  // 生成 meta.json
  const stats = getModelStats(absPath);
  const meta = {
    name,
    category,
    source: absPath,
    source_type: "file",
    format: ext.slice(1),
    ...stats,
    model_provider: "workbuddy",
    model: "deepseek-v3",
    status: "imported",
    created: new Date().toISOString().slice(0, 10),
    notes: "",
  };

  fs.writeFileSync(path.join(modelDir, "meta.json"), JSON.stringify(meta, null, 2));

  console.log(`✓ 模型已导入: ${category}/${name}`);
  console.log(`  源文件: ${destFile}`);
  console.log(`  元数据: ${path.join(modelDir, "meta.json")}`);
  console.log(`  下一步: 运行代码化 pipeline`);
}

main();
