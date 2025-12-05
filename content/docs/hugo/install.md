---
title: "安装步骤"
weight: 10
---

## 一、安装hugo

{{< tabs >}}  

  {{< tab name="Windows自带的命令(Winget)" >}} 
### 1. 按键盘上的 Win 键 + R，输入 cmd，然后回车打开“命令提示符”。

### 2. 在黑框里直接粘贴下面这行代码，然后回车：

```dos
winget install Hugo.Hugo.Extended
```
### 3. 等待进度条走完。如果提示“安装成功”，那您就搞定了！

* 注：可能会弹窗询问是否允许安装，点击“是”即可。

### 4. 验证： 关闭这个黑框，重新打开一个新的黑框 (cmd)，输入 hugo version。如果有反应，就说明环境搭好了。
  {{< /tab >}}

  {{< tab name="手动下载" >}}  
如果方法一报错或者没反应，我们可以用最传统的手动下载方式，就像下载普通软件一样，但多了一个“配置环境”的步骤。

### 1. 下载安装包
去 Hugo 的 GitHub 发布页面： https://github.com/gohugoio/hugo/releases

往下翻，找到最新的版本（Assets 列表里），下载这个文件： hugo_extended_xxxxx_windows-amd64.zip (注意：一定要下载带 extended 字样的版本，因为很多漂亮主题需要它)

### 2. 解压
把下载的压缩包解压。你会得到一个 hugo.exe 文件。 建议把它放在一个简单的路径下，比如 C 盘根目录新建一个文件夹叫 Hugo。 现在的路径应该是：C:\Hugo\hugo.exe

### 3. 配置环境变量 (最关键的一步)
为了让你在任何文件夹都能运行 hugo 命令，你需要告诉 Windows 这个文件在哪里。

* 按 Win 键，直接打字搜索 “编辑系统环境变量”，点击打开。

* 在弹出的窗口右下角点击 “环境变量”。

* 在下面的“系统变量”列表里，找到一行叫 Path 的，选中它，点击 “编辑”。

* 点击右边的 “新建”。

* 填入你刚才存放 hugo.exe 的文件夹路径，例如 C:\Hugo。

* 一路点击“确定”关闭所有窗口。

### 4. 验证
打开一个新的 cmd 窗口，输入：

```dos
hugo version
```
看到版本号就成功了！
  {{< /tab >}}
{{< /tabs >}}

## 二、创建站点

既然环境通了，我们现在就来生成博客的文件夹。为了方便文件管理，建议把博客放在适当的存放位置

请继续在那个黑框（CMD）里，依次输入下面的命令（每行输完按回车）：

### 1. 先进入需要存放博客站点的目录：
```DOS
d:
cd d:\tools\blog
```

### 2. 创建博客文件夹（名字叫hugo）：
```DOS
hugo new site hugo
```
### 3. 进入这个新文件夹：
```DOS
cd hugo
```
## 三、安装主题 (Theme)
### 1. 初始化 Git 仓库
```DOS
git init
```
### 2. 下载主题

{{< tabs >}}  

  {{< tab name="Git Submodule(推荐)" >}} 
  ```bash
  git submodule add https://github.com/imfing/hextra.git themes/hextra
  ```
  {{< /tab >}}
    {{< tab name="直接Clone" >}} 
  ```bash
  git clone https://github.com/imfing/hextra.git themes/hextra
  ```
  {{< /tab >}}


  {{< tab name="更新主题" >}} 
  ```bash
  git submodule update --remote --merge
  ```
  {{< /tab >}}

  {{< tab name="下载主题" >}} 
  
  或者手动下载主题包：https://themes.gohugo.io
  {{< /tab >}}

{{< /tabs >}}


