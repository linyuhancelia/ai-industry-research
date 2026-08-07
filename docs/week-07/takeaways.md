---
prev:
  text: '💬 互动记录'
  link: '/week-07/interaction'
next: false
---

# Week 7 · 认知存盘

::: warning 状态
⬜ 未存盘——需完成思考题互动后提炼
:::

## 本周核心认知清单

- [ ] Transformer 的核心创新：用 Attention（并行）替代 RNN（串行），让所有 token 直接互相交流
- [ ] Attention 的 Q/K/V 三角色：Query（我想知道什么）、Key（我能提供什么）、Value（我的具体内容）
- [ ] Multi-Head Attention：多个注意力头从不同角度理解信息，GPT-4 级别有 96-128 个头
- [ ] GQA 的精确理解：多个 Query head 共享 Key/Value head，缩小 KV Cache 4-8 倍
- [ ] Transformer Block = Attention（交流）+ FFN（独立思考）+ 残差连接 + LayerNorm
- [ ] Decoder-Only 架构统一所有任务为"预测下一个 Token"——极致简单 = 极致可扩展
- [ ] Attention 的计算量 = O(n²)——上下文翻倍，计算量翻四倍
- [ ] 128K 上下文 vs 4K，Attention 计算量增加 1,024 倍
- [ ] Flash Attention：重构计算顺序让 Attention 全部在 SRAM 中完成，HBM 读写减少 5-20 倍
- [ ] Scaling Law：模型性能与参数量(N)、数据量(D)、计算量(C) 呈幂律关系
- [ ] Chinchilla 最优：训练 Token 数 ≈ 参数量 × 20，GPT-3 数据严重不足
- [ ] 当前趋势是"过度训练小模型"——优化推理成本而非训练成本
- [ ] MoE 是 Scaling Law 的"作弊码"——1.8T 总参数但每次只激活 ~200B
- [ ] Scaling Law 三个天花板：数据天花板、算力天花板、架构天花板
- [ ] Scaling Law 是 AI 产业链需求的源头驱动力——如果失效，整条链受影响

## 关键数字速查

| 数字 | 含义 |
|------|------|
| 2017 | Transformer 论文"Attention Is All You Need"发表年份 |
| 96-128 | GPT-4 级别模型的注意力头（Head）数量 |
| 96-120 | GPT-4 级别模型的 Transformer Block 层数 |
| O(n²) | Attention 计算量与上下文长度的关系——翻倍=四倍 |
| 1,024× | 128K vs 4K 上下文的 Attention 计算量倍数 |
| 5-20× | Flash Attention 减少的 HBM 读写量 |
| × 20 | Chinchilla 最优配方：训练 Token 数 / 参数量 |
| 175B / 300B | GPT-3 参数量 / 训练 Token 数（数据严重不足） |
| 70B / 15T | Llama 3 70B 参数量 / 训练 Token 数（过度训练 10×） |
| 5-15T tokens | 估计的互联网高质量文本总量上限 |
| 1.8T / 200B | GPT-4 推测的 MoE 总参数 / 每次激活参数 |

## 形成的判断框架

（互动完成后填写）

## 遗留问题

（需要在后续周次中继续追踪的问题）
