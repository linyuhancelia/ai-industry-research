---
prev:
  text: '💬 互动记录'
  link: '/week-07/interaction'
next: false
---

# Week 7 · 认知存盘

::: tip ✅ 已存盘
Week 7 思考题完成，解锁 Week 8
:::

## 本周核心认知清单

- [x] Transformer 的核心创新：用 Attention（并行）替代 RNN（串行），让所有 token 直接互相交流
- [x] Attention 的 Q/K/V 三角色：Query（我想知道什么）、Key（我能提供什么）、Value（我的具体内容）
- [x] Multi-Head Attention：多个注意力头从不同角度理解信息，GPT-4 级别有 96-128 个头
- [x] GQA 的精确理解：多个 Query head 共享 Key/Value head，缩小 KV Cache 4-8 倍
- [x] Transformer Block = Attention（交流）+ FFN（独立思考）+ 残差连接 + LayerNorm
- [x] Decoder-Only 架构统一所有任务为"预测下一个 Token"——极致简单 = 极致可扩展
- [x] Attention 的计算量 = O(n²)——上下文翻倍，计算量翻四倍
- [x] 128K 上下文 vs 4K，Attention 计算量增加 1,024 倍
- [x] Flash Attention：重构计算顺序让 Attention 全部在 SRAM 中完成，HBM 读写减少 5-20 倍
- [x] Scaling Law：模型性能与参数量(N)、数据量(D)、计算量(C) 呈幂律关系
- [x] Chinchilla 最优：训练 Token 数 ≈ 参数量 × 20，GPT-3 数据严重不足
- [x] 当前趋势是"过度训练小模型"——优化推理成本而非训练成本
- [x] MoE 是 Scaling Law 的"作弊码"——1.8T 总参数但每次只激活 ~200B
- [x] Scaling Law 三个天花板：数据天花板、算力天花板、架构天花板
- [x] Scaling Law 是 AI 产业链需求的源头驱动力——如果失效，整条链受影响
- [x] API 定价必须反映 O(n²) 成本形状——线性定价（按 token 均价）在长上下文下必然亏损
- [x] Chinchilla vs 推理最优的选择取决于推理调用量——高调用量时多花训练钱换推理省钱可快速回本
- [x] Scaling Law 天花板若出现：互联网络受影响最大（训练集群需求萎缩），电力/内存有保底（推理持续运行）

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

### 框架 15：非线性成本 → 非线性定价

> 当底层成本结构是非线性的（如 O(n²)），线性定价（按 token 均价）必然导致亏损或扭曲。产品定价必须反映成本的**形状**，不仅仅是**总量**。

**应用场景**：任何"用量越大、边际成本越高"的服务——云计算超额费、电力峰谷定价、AI 长上下文附加费。

### 框架 16：一次性投入换可变节省（Break-even 思维）

> 当面临"花更多固定成本来降低单次可变成本"的选择时，决策取决于：总调用量 × 单次节省 > 额外固定投入？回本周期是否在产品生命期内？

**应用场景**：Chinchilla vs 推理最优（多花训练钱换推理省钱）、自建 vs 外包、预付年费 vs 按需付费。

## 遗留问题

- Scaling Law 天花板何时到来？当前（2025-2026）是否已有迹象？→ 后续 Week 8-9 会从训练和推理两侧讨论
- MoE 的 Router 如何训练？负载均衡如何保证？→ Week 8 训练工程会涉及
