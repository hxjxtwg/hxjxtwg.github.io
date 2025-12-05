---
title: "组件测试"
weight: 10
---

## 1. 提示框 (Callout)

普通文字是这样的。下面是魔法框：

{{< callout type="info" >}}
👋 嗨！这是一个 **信息 (info)** 提示框。
{{< /callout >}}

{{< callout type="warning" >}}
⚠️ 这是一个 **警告 (warning)**。注意看！
{{< /callout >}}

{{< callout type="error" >}}
❌ 这是一个 **错误 (error)**。大事不妙！
{{< /callout >}}

---

## 2. 步骤条 (Steps)

特别适合写“安装教程”：

{{< steps >}}

### 第一步：准备
打开你的电脑，深呼吸。

### 第二步：复制
把这段代码复制进去。

### 第三步：见证奇迹
刷新页面，你会看到一条漂亮的左侧连线！

{{< /steps >}}

---

## 3. 选项卡 (Tabs)

适合展示不同系统的命令：

{{< tabs >}}  <-- 1. 外面变干净了

  {{< tab name="Windows" >}}  <-- 2. 名字写在这里
    ```powershell
    echo "我是 Windows"
    ```
  {{< /tab >}}

  {{< tab name="macOS" >}}    <-- 名字写在这里
    ```bash
    echo "我是 Mac"
    ```
  {{< /tab >}}

  {{< tab name="Linux" >}}    <-- 名字写在这里
    ```bash
    echo "我是 Linux"
    ```
  {{< /tab >}}

{{< /tabs >}}

## 折叠块 (Details)

{{< details title="🔴 点我查看隐藏的答案" >}}

哈哈！被你发现了！
这里可以放文字、图片，甚至代码块。
如果不点击上面的标题，这部分内容平时是看不见的。
加了 open=true，所以这部分内容一进页面就能看到。
但是用户觉得烦的话，可以点击标题把它收起来。

{{< /details >}}