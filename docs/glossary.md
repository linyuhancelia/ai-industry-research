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

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **DC** | Data Center | 数据中心，承载 IT 设备的物理设施，本质是能量转换与热管理系统 | W2 |
| **UPS** | Uninterruptible Power Supply | 不间断电源，在市电中断时提供过渡电力保障 | W2 |
| **PDU** | Power Distribution Unit | 配电单元，将高压电分配到各机柜的设备 | W2 |
| **PSU** | Power Supply Unit | 电源，服务器内部将交流电转为直流电（AC-DC 转换）的组件 | W2 |
| **Thermal Throttling** | Thermal Throttling | 温度降频，芯片过热时自动降低运行频率以保护硬件，代价是性能下降 | W2 |
| **Cold Plate** | Cold Plate | 冷板，贴在芯片表面的金属散热板，内部流通冷却液带走热量。当前 AI 液冷主流方案 | W2 |
| **CDU** | Coolant Distribution Unit | 冷却液分配单元，液冷系统中负责冷却液循环和温度控制的核心设备 | W2 |
| **浸没式液冷** | Immersion Cooling | 将整个服务器浸泡在绝缘冷却液中散热，PUE 极低但运维复杂、存在 PFAS 监管风险 | W2 |
| **PFAS** | Per- and Polyfluoroalkyl Substances | 全氟烷基物质，浸没式液冷使用的氟化冷却液成分，欧盟/美国多州正推进限制或禁令 | W2 |
| **自然冷却** | Free Cooling | 利用外部低温空气直接为数据中心降温，适用于寒冷气候地区，可显著降低 PUE | W2 |
| **Tier III/IV** | Tier III/IV | 数据中心可靠性分级标准，Tier III 可并行维护（99.982%），Tier IV 容错（99.995%） | W2 |
| **托管** | Colocation | 第三方 DC 运营商出租机柜/电力/带宽，客户自带服务器入驻 | W2 |
| **定制建设** | Build-to-Suit | 按客户需求定制设计和建造数据中心，适用于超大规模部署 | W2 |
| **模块化预制** | Modular Prefab | 模块化预制数据中心，工厂生产标准模块现场拼装，建设周期 6-9 个月 | W2 |
| **HVAC** | Heating Ventilation and Air Conditioning | 暖通空调系统，传统数据中心散热的核心基础设施 | W2 |
| **IXP** | Internet Exchange Point | 互联网交换点，不同网络运营商互联互通的枢纽，影响 DC 选址 | W2 |
| **数据主权** | Data Sovereignty | 数据必须存储和处理在特定国家/地区境内的法律要求 | W2 |
| **出口管制** | Export Control | 政府限制特定技术或产品出口的政策，如美国对华芯片出口管制 | W2 |
| **超大规模云厂商** | Hyperscaler | 微软/Google/Amazon 等自建数据中心的超大规模云计算企业 | W2 |
| **TCO** | Total Cost of Ownership | 总拥有成本，包含资本支出和全生命周期运营成本的综合指标 | W2 |

## 网络与互联（Week 2-3）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **InfiniBand** | InfiniBand (IB) | 高性能计算专用网络协议，时延 0.5-1.5 微秒，NVIDIA 通过收购 Mellanox 垄断 | W2 |
| **以太网** | Ethernet | 通用网络协议，时延 5-20 微秒，生态开放、多厂商竞争 | W2 |
| **RDMA** | Remote Direct Memory Access | 远程直接内存访问，绕过 CPU 直接在内存间传输数据，降低时延 | W2 |
| **RoCE** | RDMA over Converged Ethernet | 以太网上的 RDMA 实现，让以太网具备类似 InfiniBand 的低时延能力 | W2 |
| **NVLink** | NVLink | NVIDIA GPU 间高速直连通道，绕过 PCIe 总线。NVLink 5.0 支持 72 GPU 全互联，单 GPU 带宽 1,800 GB/s | W2 |
| **NVSwitch** | NVSwitch | NVLink 网络的交换芯片，类似高速公路立交枢纽，实现多 GPU 间任意全速通信 | W3 |
| **NVLink Domain** | NVLink Domain | 通过 NVSwitch 实现 NVLink 全互联的 GPU 集合。NVLink 5.0 支持最大 72 GPU（9 台服务器）的 Domain | W3 |
| **交换机** | Switch | 网络的"十字路口"，负责数据包在不同设备间的转发和路由 | W2 |
| **UEC** | Ultra Ethernet Consortium | 超以太网联盟，2023 年由 AMD/Broadcom/Cisco/Intel/Meta/微软等成立，开发 AI 专用以太网标准 | W3 |
| **Fat-Tree** | Fat-Tree Topology | 胖树拓扑，多层交换机组成树状结构，越往上带宽越大，实现任意节点间等带宽（Non-blocking） | W3 |
| **Rail-Optimized** | Rail-Optimized Topology | 轨道优化拓扑，按 GPU 并行角色分组连接，匹配数据并行通信模式，减少交换机需求 20-30% | W3 |
| **光模块** | Optical Transceiver | 光电信号转换模块，插在交换机/网卡上。万卡集群需 4-5 万个，占网络成本 40-60% | W3 |
| **CPO** | Co-Packaged Optics | 光电共封装，将光模块集成到交换机芯片封装内，减少功耗和时延。2028+ 技术方向 | W3 |
| **ToR** | Top of Rack Switch | 机架顶部交换机，连接同一机柜内的服务器，是网络拓扑的最底层 | W3 |
| **数据并行** | Data Parallelism (DP) | 每块 GPU 持有完整模型副本，拆分数据。每步通过 AllReduce 同步梯度，通信量中等 | W3 |
| **张量并行** | Tensor Parallelism (TP) | 把模型每一层切分到多块 GPU 上，每个算子都要同步。通信量极高，必须走 NVLink | W3 |
| **流水线并行** | Pipeline Parallelism (PP) | 把模型不同层分到不同 GPU，相邻层单向传输激活值。通信量较低 | W3 |
| **3D 并行** | 3D Parallelism | 同时使用 DP + TP + PP 三种并行策略的训练方法，核心是将不同并行方式匹配到不同网络层 | W3 |
| **NCCL** | NVIDIA Collective Communications Library | NVIDIA 集合通信库，AllReduce 等操作的底层实现，深度优化与 NVLink/IB 配合 | W3 |
| **三层锁定** | Triple Lock-in | NVIDIA 通过 CUDA（软件）+ NVLink（机内互联）+ InfiniBand（跨机互联）构建的系统级客户锁定 | W3 |

## 芯片与硬件（Week 4）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **SM** | Streaming Multiprocessor | 流式多处理器，GPU 的基本工作单元。每个 SM 包含 CUDA Core、Tensor Core、寄存器、共享内存等 | W4 |
| **GPC** | Graphics Processing Cluster | 图形处理集群，包含多个 SM 的逻辑分组 | W4 |
| **Tensor Core** | Tensor Core | 张量核心，GPU 中专为矩阵运算设计的硬件单元，一次可完成 4×4 矩阵乘加，速度是 CUDA Core 的 4-16 倍 | W4 |
| **Warp** | Warp | GPU 最小执行单位，32 个线程一组，必须同时执行相同指令（SIMT 模式） | W4 |
| **SIMT** | Single Instruction, Multiple Threads | 单指令多线程，GPU 的执行模型——一条指令同时驱动 32 个线程处理不同数据 | W4 |
| **HBM** | High Bandwidth Memory | 高带宽内存，垂直堆叠的 DRAM 芯片通过硅中介层与 GPU 连接。仅 SK Hynix 和 Samsung 量产 | W4 |
| **内存墙** | Memory Wall | 计算速度增长远快于内存带宽增长，导致内存成为系统瓶颈的现象 | W4 |
| **算术强度** | Arithmetic Intensity | 计算量（FLOPS）与数据搬运量（Bytes）的比值，决定操作是计算受限还是内存受限 | W4 |
| **MFU** | Model FLOPS Utilization | 模型算力利用率，实际训练速度对应的 FLOPS / GPU 理论峰值 FLOPS。通常 30-50% | W4 |
| **光罩极限** | Reticle Limit | 芯片制造光刻机单次曝光的最大面积（约 858 mm²），限制单芯片最大尺寸 | W4 |
| **双芯封装** | Multi-Die / Chiplet Design | 将两块芯片通过高速互联封装为一块逻辑芯片，突破光罩极限。B200 采用此设计 | W4 |
| **硅中介层** | Silicon Interposer | 芯片封装中用于连接 GPU 芯片和 HBM 的硅基底层，提供数千条微型通道 | W4 |
| **FP8 / FP4** | FP8 / FP4 | 8 位 / 4 位浮点精度，通过降低数值精度换取更高计算吞吐量。FP4 主要用于推理 | W4 |
| **BF16** | Brain Floating Point 16 | Google 提出的 16 位浮点格式，保留 FP32 的指数范围但截断尾数，AI 训练主流精度 | W4 |
| **结构化稀疏** | Structured Sparsity | Ampere 架构引入的优化：识别矩阵中 50% 的零值并跳过计算，理论性能翻倍 | W4 |
| **Transformer Engine** | Transformer Engine | Hopper 架构引入的硬件模块，自动在 FP8 和 FP16 精度之间切换，兼顾性能和精度 | W4 |
| **GPGPU** | General-Purpose Computing on GPU | 通用 GPU 计算，用 GPU 运行非图形计算任务（如 AI 训练、科学计算） | W4 |
| **飞轮效应** | Flywheel Effect | NVIDIA 的正反馈循环：硬件领先→更多开发者→更丰富生态→更多企业采购→更多研发投入 | W4 |
| **ROCm** | ROCm (Radeon Open Compute) | AMD 的 GPU 开放计算平台，CUDA 的主要竞争对手，生态规模约为 CUDA 的 1/10 | W4 |
| **Fabless** | Fabless (无晶圆厂) | 芯片公司只做设计不做制造，由台积电等代工厂生产。NVIDIA、AMD 均为 Fabless 模式 | W4 |

## 芯片竞争格局（Week 5）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **TPU** | Tensor Processing Unit | Google 自研的 AI 专用芯片，从头为矩阵运算设计。仅通过 Google Cloud 提供，不对外销售 | W5 |
| **MXU** | Matrix Multiply Unit | TPU 内部的矩阵乘法专用单元，等价于 NVIDIA 的 Tensor Core | W5 |
| **ICI** | Inter-Chip Interconnect | Google 自研的 TPU 间互联技术，替代 NVLink/InfiniBand | W5 |
| **XLA** | Accelerated Linear Algebra | Google 开发的加速线性代数编译器，为 TPU 和 GPU 优化计算图 | W5 |
| **JAX** | JAX | Google 的 AI 框架，基于 XLA 编译器，在 TPU 上性能最优 | W5 |
| **ASIC** | Application-Specific Integrated Circuit | 专用集成电路，为特定任务从头设计的芯片。TPU、Cerebras WSE 均属于 ASIC | W5 |
| **垂直整合** | Vertical Integration | 一家公司同时控制产业链多个层级（如 Google 自研芯片+网络+编译器+框架+模型） | W5 |
| **WSE** | Wafer-Scale Engine | Cerebras 的晶圆级芯片，用整片 300mm 晶圆做一块芯片，面积是 GPU 的 56 倍 | W5 |
| **LPU** | Language Processing Unit | Groq 的语言处理专用芯片，编译时完成所有调度决策，推理延迟是 GPU 的 1/5-1/10 | W5 |
| **CANN** | Compute Architecture for Neural Networks | 华为自研的 AI 计算架构，替代 CUDA 的角色 | W5 |
| **HCCS** | Huawei Cache Coherence System | 华为自研的芯片间互联技术，替代 NVLink 的角色 | W5 |
| **MindSpore** | MindSpore | 华为自研的 AI 框架，替代 PyTorch 的角色 | W5 |
| **H20** | NVIDIA H20 | NVIDIA 为符合美国出口管制而设计的"阉割版" GPU，性能约为 H100 的 1/4-1/5 | W5 |
| **NPU** | Neural Processing Unit | 神经网络处理单元，通常指移动设备/边缘设备中的 AI 加速器 | W5 |
| **存内计算** | In-Memory Compute | 在内存中直接执行计算，避免数据在内存和计算单元间搬运，直接解决内存墙问题 | W5 |

## 存储与内存（Week 6）

| 术语 | 英文 | 定义 | 首现 |
|------|------|------|------|
| **Roofline 模型** | Roofline Model | 屋顶线模型，分析操作是计算受限还是内存带宽受限的经典工具。横轴算术强度，纵轴实际性能 | W6 |
| **算术强度** | Arithmetic Intensity | 计算量（FLOPS）与数据搬运量（Bytes）的比值。低于 GPU 拐点的操作为内存受限 | W4→W6 |
| **KV Cache** | Key-Value Cache | LLM 推理时存储历史 token 注意力信息的缓存。上下文越长，KV Cache 越大，是推理内存墙的核心 | W6 |
| **TSV** | Through-Silicon Via | 硅通孔，HBM 芯片堆叠中贯穿多层 DRAM 的垂直微型通道，直径仅 5-10 微米 | W6 |
| **CoWoS** | Chip on Wafer on Substrate | 台积电的先进封装技术，将 GPU 芯片和 HBM 通过硅中介层封装在一起。GPU 出货的最紧瓶颈 | W6 |
| **HBM3e** | HBM3e | 第三代增强版高带宽内存，12 层堆叠，单颗带宽 1,200 GB/s。B200 GPU 使用 | W6 |
| **HBM4** | HBM4 | 下一代 HBM，预计 2026 年量产，12-16 层堆叠，单颗带宽约 2,000 GB/s | W6 |
| **CXL** | Compute Express Link | 计算快速链路，基于 PCIe 物理层的新互联协议，支持内存池化和共享 | W6 |
| **内存池化** | Memory Pooling | 通过 CXL 等协议将多台服务器的内存资源统一管理、按需分配的技术 | W6 |
| **并行文件系统** | Parallel File System | 数据分散存储在多台服务器上、多路并行读取的文件系统。AI 训练集群标配 | W6 |
| **Lustre** | Lustre | 开源并行文件系统，HPC 和 AI 训练集群广泛使用 | W6 |
| **WekaFS** | WekaFS | 为 AI 训练优化的全闪存并行文件系统，NVMe 原生设计 | W6 |
| **PIM** | Processing-in-Memory | 存内计算，在内存芯片内部嵌入计算逻辑，避免数据搬运。Samsung HBM-PIM 已试验 | W5→W6 |
| **NDP** | Near-Data Processing | 近存计算，在内存芯片旁边放置计算单元，大幅减少搬运距离 | W6 |
| **3D V-Cache** | 3D Vertical Cache | AMD 的 3D 堆叠缓存技术，将额外 SRAM 芯片堆叠在处理器上方，缓存容量翻 3 倍 | W6 |
| **晶圆减薄** | Wafer Thinning | HBM 制造中将 DRAM 晶圆磨薄到 30-40 微米的工艺，是堆叠的前提条件 | W6 |
| **pJ** | Picojoule | 皮焦耳，10⁻¹² 焦耳，衡量芯片内部单次操作能耗的单位 | W6 |

## 模型与算法（Week 7-9）

（后续解锁后更新）

## 应用与 Agent（Week 10-12）

（后续解锁后更新）
