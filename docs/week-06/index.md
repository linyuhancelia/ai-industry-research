---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  router.go(withBase('/week-06/lecture'))
})
</script>

# Week 6 · 存储与内存墙

::: tip ✅ 已解锁
本周内容已解锁，正在跳转到讲义页面...

如果没有自动跳转，请点击：[📖 进入讲义](/week-06/lecture)
:::
