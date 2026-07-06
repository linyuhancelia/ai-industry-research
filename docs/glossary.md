# 术语表

::: tip 使用说明
本术语表随课程推进持续积累。每个术语标注了首次出现的周次，方便回溯上下文。
:::

## 电力与能源（Week 1）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **TDP** | Thermal Design Power | 热设计功耗，芯片在最大负载下的设计散热功率上限 | W1 |
| **PUE** | Power Usage Effectiveness | 数据中心能效比 = 总设施功耗 / IT 设备功耗。1.0 为理论完美值，越低越好 | W1 |
| **LCOE** | Levelized Cost of Energy | 平准化度电成本，将电厂全生命周期成本摊到每度电的综合指标 | W1 |
| **PPA** | Power Purchase Agreement | 购电协议，发电商与用电方签订的长期固定价格供电合同 | W1 |
| **SMR** | Small Modular Reactor | 小型模块化核反应堆，单堆功率 < 300MW，支持工厂化制造 | W1 |
| **容量因子** | Capacity Factor | 发电设备实际发电量 / 理论满发电量的比率。光伏约 20-25%，核电约 90%+ | W1 |
| **BESS** | Battery Energy Storage System | 电池储能系统 | W1 |
| **NIMBYism** | Not In My Back Yard | "别建在我家后院"，居民反对本地基建项目的社会现象 | W1 |
| **特高压直流** | UHVDC | ±800kV / ±1100kV 超高压直流输电技术，中国领先 | W1 |
| **东数西算** | East Data West Computing | 中国国家战略，引导算力基础设施向西部布局 | W1 |

## 计算基础（Week 1 互动补充）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **CPU** | Central Processing Unit | 中央处理器，少量强核心，擅长复杂逻辑任务 | W1 |
| **GPU** | Graphics Processing Unit | 图形处理器，数千-数万弱核心，擅长大规模并行计算。AI 算力主力 | W1 |
| **CUDA** | Compute Unified Device Architecture | NVIDIA 的通用 GPU 计算框架，AI 框架（PyTorch/TensorFlow）深度绑定的生态 | W1 |
| **Tensor Core** | Tensor Core | GPU 中专为矩阵运算设计的硬件单元，比普通 CUDA 核心快 4-8 倍 | W1 |
| **FLOPS** | Floating Point Operations Per Second | 每秒浮点运算次数，衡量算力的核心单位。T = Tera = 万亿 | W1 |
| **万卡集群** | 10K-GPU Training Cluster | 由 10,000+ 块 GPU 组成的大模型训练计算集群 | W1 |
| **矩阵乘法** | Matrix Multiplication | 神经网络计算的核心操作，大量数字相乘再相加，天然适合 GPU 并行 | W1 |
| **前向传播** | Forward Pass | 数据从输入到输出经过神经网络每一层计算的过程 | W1 |
| **AllReduce** | AllReduce | 分布式训练中 GPU 之间同步梯度数据的集合通信操作 | W1 |
| **时延** | Latency | 数据从一点传到另一点的延迟时间。同机房微秒级，跨城毫秒级 | W1 |
| **推理** | Inference | 用训练好的模型处理新数据产生结果的过程，对时延要求低于训练 | W1 |
| **训练** | Training | 用大量数据调整模型参数的过程，对 GPU 间通信时延极其敏感 | W1 |
| **LLM** | Large Language Model | 大语言模型，如 GPT-4、Llama 3，参数量达数百亿到万亿 | W1 |
| **REIT** | Real Estate Investment Trust | 房地产投资信托，数据中心运营商的商业模式类比 | W1 |

## 数据中心（Week 2）

（Week 2 解锁后更新）

## 芯片与硬件（Week 4-6）

（后续解锁后更新）

## 模型与算法（Week 7-9）

（后续解锁后更新）

## 应用与 Agent（Week 10-12）

（后续解锁后更新）
