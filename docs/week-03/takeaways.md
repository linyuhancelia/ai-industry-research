---
prev:
  text: '💬 互动记录'
  link: '/week-03/interaction'
next: false
---

# Week 3 · 认知存盘

::: warning 状态
⬜ 未存盘——需完成思考题互动后提炼
:::

## 本周核心认知清单

- [ ] 网络是 AI 训练的"隐形瓶颈"——每步通信延迟×百万步 = 天级成本差异
- [ ] 三层互联架构：芯片级（NVLink C2C）→ 机内（NVLink+NVSwitch）→ 跨机（IB/以太网）
- [ ] NVLink 5.0 的质变：72 GPU NVLink Domain，张量并行不再受限于单机
- [ ] InfiniBand vs 以太网的本质是"垄断 vs 开放"的商业模式之争
- [ ] UEC（超以太网联盟）的目标和进展
- [ ] Fat-Tree 拓扑的原理、优势与成本问题
- [ ] Rail-Optimized 拓扑的创新逻辑
- [ ] 光模块是网络成本的 40-60%，是 AI 基础设施的隐形成本大头
- [ ] 三种并行策略（DP/TP/PP）的通信模式与网络层匹配关系
- [ ] NVIDIA 的三层锁定（CUDA + NVLink + InfiniBand）及系统级护城河

## 关键数字速查

| 数字 | 含义 |
|------|------|
| 900 GB/s | NVLink 4.0（H100）单 GPU 总带宽 |
| 1,800 GB/s | NVLink 5.0（B200）单 GPU 总带宽 |
| 50 GB/s | InfiniBand NDR 400G 单端口带宽 |
| 36倍 | NVLink 5.0 vs InfiniBand 的带宽差距 |
| 72 GPU | NVLink 5.0 Domain 最大规模 |
| 0.5-1.5 微秒 | InfiniBand 时延 |
| 800-1,000 台 | 16,384 GPU Fat-Tree 所需交换机数量 |
| 40-60% | 光模块占网络总成本比例 |
| $69 亿 | NVIDIA 收购 Mellanox 的价格 |

## 形成的判断框架

（互动完成后填写）

## 遗留问题

（需要在后续周次中继续追踪的问题）
