# 产业投资地图

::: tip 使用说明
本页面逐周叠加产业链全景图，每完成一周内容后更新对应层级的细节。
:::

## AI 全产业链价值流转图

```mermaid
graph TB
    subgraph L1["⚡ 第一层：电力与能源 (Week 1)"]
        direction LR
        A1["发电<br/>天然气/核电/绿电"]
        A2["输配电<br/>电网/变电站"]
        A3["电力设备<br/>变压器/UPS/BESS"]
        A1 --> A2 --> A3
    end

    subgraph L2["🏗️ 第二层：数据中心 (Week 2) 🔒"]
        direction LR
        B1["选址与土建"]
        B2["制冷系统"]
        B3["DC运营商"]
    end

    subgraph L3["🔗 第三层：互联网络 (Week 3) 🔒"]
        direction LR
        C1["InfiniBand/以太网"]
        C2["NVLink/NVSwitch"]
        C3["光模块"]
    end

    subgraph L4["🔲 第四层：芯片与硬件 (Week 4-6) 🔒"]
        direction LR
        D1["GPU/ASIC"]
        D2["HBM/存储"]
        D3["封装"]
    end

    subgraph L5["🧮 第五层：模型与算法 (Week 7-9) 🔒"]
        direction LR
        E1["训练框架"]
        E2["基础模型"]
        E3["推理引擎"]
    end

    subgraph L6["🤖 第六层：应用与Agent (Week 10-12) 🔒"]
        direction LR
        F1["云计算平台"]
        F2["Agent/工具链"]
        F3["终端应用"]
    end

    L1 --> L2 --> L3 --> L4 --> L5 --> L6

    style L1 fill:#ff6b6b22,stroke:#ff6b6b
    style L2 fill:#33333311,stroke:#999
    style L3 fill:#33333311,stroke:#999
    style L4 fill:#33333311,stroke:#999
    style L5 fill:#33333311,stroke:#999
    style L6 fill:#33333311,stroke:#999
```

## 各层关键玩家

### 第一层：电力与能源（Week 1 已解锁）

| 环节 | 代表公司 | 定价权 | 产能弹性 | 超额利润判断 |
|------|---------|--------|---------|-------------|
| 电力设备 | 伊顿 / 施耐德 / 特变电工 | 强 | 低（产能扩张慢） | ⭐⭐⭐ 持续超额利润 |
| DC 运营商 | Equinix / Digital Realty / 万国数据 | 强 | 低（建设2-3年） | ⭐⭐⭐ 长租约锁定 |
| 天然气发电 | Vistra Energy | 中 | 中 | ⭐⭐ 受益于电价上涨 |
| 核电 | Constellation / 中核 | 中 | 极低 | ⭐ 长期看好但兑现远 |
| 铜矿 | Freeport / 紫金矿业 | 中 | 极低（7-10年） | ⭐⭐ 资源品长期看涨 |

### 第二层至第六层

（随课程推进逐步解锁更新）

---

## 跨层洞察

（互动过程中提炼的跨层级分析将记录在此）
