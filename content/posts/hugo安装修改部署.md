---

title: "Hugo安装修改部署"

date: 2025-12-03T19:33:52+08:00

lastmod: 2025-12-03T19:33:52+08:00

draft: false

categories: \["技术"]

tags: \["技术"]

author: "xxsky"

description: ""

\# cover: /images/default.jpg

---



hugo安装、修改配置、部署详细过程
<!--more-->

## 一、安装hugo
### 方法一：使用 Windows 自带的命令 (Winget) —— 最推荐

### 1. 按键盘上的 Win 键 + R，输入 cmd，然后回车打开“命令提示符”。

### 2. 在黑框里直接粘贴下面这行代码，然后回车：

```dos
winget install Hugo.Hugo.Extended
```
### 3. 等待进度条走完。如果提示“安装成功”，那您就搞定了！

* 注：可能会弹窗询问是否允许安装，点击“是”即可。

### 4. 验证： 关闭这个黑框，重新打开一个新的黑框 (cmd)，输入 hugo version。如果有反应，就说明环境搭好了。

### 方法二：手动下载 (最传统的“解压即用”法)
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

总结
* 先试试 方法一 (Winget)，一行代码搞定，最省心。

* 如果不行，就用 方法二，虽然要点好几下鼠标，但是最稳妥。

您先试一下方法一，看看能不能成功？

### 二、创建站点

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
PaperMod主题
```DOS
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```
Dream主题
```DOS
git submodule add https://github.com/g1eny0ung/hugo-theme-dream.git themes/dream
```
或者手动下载主题包：https://themes.gohugo.io

## 四、修改配置文件
以下以Dream主题为例,VS Code操作
### 1. hugo.toml
```yaml
baseURL = "http://example.org/"
defaultContentLanguage = "zh-cn"
languageCode = "zh-CN"
title = "我的 Dream 博客"
theme = "dream"

# ================= 服务设置 =================
# [services]
#   [services.disqus]
#     shortname = ""
#   [services.googleAnalytics]
#     ID = ""

# ================= 主题参数设置 =================
[params]
  # 禅模式 (默认关闭。开启后变为双栏布局，关闭为翻转卡片)
  # zenMode = true

  # 配色方案
  lightTheme = "emerald"
  darkTheme = "forest"

  # 背景图
  # backgroundImage = "img/global-background.jpg"
  # backgroundImageDark = ""

  author = "xxsky"
  description = "这是我的博客"
  avatar = "img/avatar.png"      # 请确保 static/img/ 目录下有这张图
  headerTitle = "Hugo Theme Dream"
  # motto = ""

  # 页脚自定义文字
  # footerBottomText = ""

  # RSS 图标
  rss = true

  # 评论系统 (按需打开)
  # utterancesRepo = ""
  # valine = true
  # LEANCLOUD_APP_ID = ""
  # LEANCLOUD_APP_KEY = ""
  # waline = true
  # walineServer = ""

  # === 联系方式 (原版字段) ===
  # 填入后，侧边栏会自动显示邮箱图标
  # email = "xuhxjxhk@gmail.com"

  siteStartYear = 2016

  # favicon = "favicon.ico"

  # 代码高亮开关
  # 建议关闭，配合我们的 style.css 使用
  customSyntaxHighlighting = false

  # ================= 功能开关 =================
  # 导航栏吸顶
  stickyNav = true

  # 导航菜单排序 (必须包含 about 才能显示关于按钮)
  reorderNavItems = ["about", "search", "rss", "posts", "categories", "tags"]
  
  # 移动端折叠菜单
  collapseNavItems = ["posts", "categories", "tags"]
  
  # 隐藏默认封面
  noDefaultSummaryCover = true
  
  # 显示文章目录
  showTableOfContents = true
  
  # 文章页显示封面图
  showSummaryCoverInPost = true
  
  # 图片点击放大
  imageZoomableInPost = true
  
  # 显示上下篇导航
  showPrevNextPost = true
  
  # 分享按钮 (留空数组 = 关闭)
  reorderShares = []

  # ================= 自定义菜单 =================
  # [params.navItems]

  # ================= Twikoo 评论 =================
  # [params.twikoo]
  # enabled = true
  # envID = ""
  # region = ""
  # lang = ""

  [params.navItems]
  # 首页
  home = { href = "/", icon = "home", title = "首页" }
  
  # 文章归档
  posts = { href = "/posts", icon = "book", title = "文章" }
  categories = { href = "/categories", icon = "grid", title = "分类" }
  tags = { href = "/tags", icon = "pricetags", title = "标签" }

  # 邮箱 (可选，如果想放在顶部)
  email = { href = "mailto:xuhxjxhk@gmail.com", icon = "mail", title = "Email" }

  # ！！！核心修复：定义 GitHub 按钮！！！
  # 这样 GitHub 图标就会显示在顶部，而不需要用 socialLinks
  github = { href = "https://github.com/xuhxjx", icon = "logo-github", title = "GitHub" }

  # ================= 高级设置 =================
  [params.advanced]
    # 挂载您的特效文件 (Halo动画 + 扁平代码块)
    customCSS = ["css/style.css"]
    customJS = ["js/app.js"]

  # ================= 实验性功能 =================
  [params.experimental]
    # 开启日期中文显示
    jsDate = true
    jsDateFormat = "yyyy年MM月dd日"

# ======================================================
# 代码高亮设置 (Markup)
# ======================================================
[markup]
  [markup.highlight]
    codeFences = true
    guessSyntax = true
    lineNos = true
    lineNumbersInTable = true
    noClasses = false
    style = "friendly"
    tabWidth = 4
  
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```
### 2. 加载halo动画与代码块样式
新建static/css/style.css文件,内容：
```css
/* --- 修复根元素高度，确保固定定位元素能撑满全屏 --- */
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
/* ---------------------------------------------------- */


/* ================= 1. Halo 赛车加载动画 (定位 FIX) ================= */
#halo-racer-loader { 
    position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;     
    width: 100% !important; height: 100% !important; z-index: 999999999 !important; 
    background: #ffffff; display: flex !important; justify-content: center !important; align-items: center !important; 
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
html.dark #halo-racer-loader { background: #1a1a1a; }
#halo-racer-loader.hidden { opacity: 0; visibility: hidden; }

/* Halo 方块和动画定义 */
.racer-container { position: relative; width: 80px; height: 20px; }
.bar { position: absolute; top: 0; left: 0; width: 12px; height: 20px; border-radius: 0; }
.p1 { background: rgba(255,71,87,0.2); z-index:1; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0.15s; }
.p2 { background: rgba(0,0,0,0.05); z-index:2; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0.08s; }
.red { background: #ff4757; z-index:10; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0s; }
@keyframes run { 0%{left:0} 30%{left:68px} 50%{left:68px} 80%{left:0} 100%{left:0} }


/* ================= 2. 代码块扁平化与配色修正 ================= */

.highlight { 
    background: #f6f8fa!important; border-radius: 6px !important; margin: 1.5rem 0; padding: 0; overflow: hidden; position: relative; box-shadow: none !important; border: none !important; transition: height 0.3s ease; color: #24292e; 
}
html.dark .highlight { background: #282a36!important; color: #f8f8f2 !important; }

/* --- 折叠状态 --- */
.highlight.folded { height: 60px !important; overflow: hidden !important; }
.highlight.folded::after { content:""; position:absolute; bottom:0; width:100%; height:30px; background:linear-gradient(to bottom, transparent, #f6f8fa); pointer-events: none; }
html.dark .highlight.folded::after { background:linear-gradient(to bottom, transparent, #282a36); }

/* 内部结构修正 */
.highlight table { margin: 0 !important; width: 100%; }
.highlight td:first-child { width: 40px !important; background: transparent !important; border-right: none !important; padding: 10px 0 !important; user-select: none; }
.highlight td:last-child { padding: 10px 15px !important; width: 100%; }
.highlight .lnt { color: #999!important; font-size: 12px; margin-right: 8px; text-align: right; display: block; }
.highlight pre { font-family: Consolas, Monaco, "Andale Mono", monospace; font-size: 14px; line-height: 1.6; }


/* 按钮组样式 */
.code-tools { position: absolute; top: 6px; right: 6px; display: flex; opacity: 0; transition: opacity 0.2s; z-index: 10; }
.highlight:hover .code-tools { opacity: 1; }
.c-btn { width: 30px; height: 30px; background: transparent; border:none; cursor:pointer; color:#333; display:flex; justify-content:center; align-items:center; transition: all 0.2s ease; }
.c-btn:hover { background: transparent; color: #ff4757; }
html.dark .c-btn { color: #aaa; }
html.dark .c-btn:hover { background: transparent; color: #ff79c6; }


/* ================= 3. 完整语法颜色集 (Light/Dark) ================= */

/* --- 浅色模式 (Light - 默认) --- */
.chroma .k, .chroma .kd, .chroma .kt { color: #0088ce; font-weight: bold; } /* 关键字 (blue) */
.chroma .s, .chroma .s1, .chroma .s2 { color: #a31515; } /* 字符串 (red) */
.chroma .c, .chroma .c1, .chroma .cm { color: #888888; font-style: italic; } /* 注释 (grey) */
.chroma .nf { color: #660066; font-weight: bold; } /* 函数名 */
.chroma .mi, .chroma .mb, .chroma .mf { color: #660066; } /* 数字/浮点数 */
.chroma .nc { color: #008080; } /* 类名 */
.chroma .na, .chroma .nt { color: #000080; } /* 标签/属性 */
.chroma .nb { color: #0086b3; } /* 内置对象/函数 */


/* --- 深色模式适配 (Dracula/Neon Mix) --- */
html.dark .chroma .k, html.dark .chroma .kd, html.dark .chroma .kt { color: #ff79c6 !important; } /* 关键字/类型: 粉色 */
html.dark .chroma .s { color: #f1fa8c !important; } /* 字符串: 黄色 */
html.dark .chroma .c { color: #6272a4 !important; } /* 注释: 蓝灰 */

html.dark .chroma .nf { color: #50fa7b !important; font-weight: bold; } /* 函数名: 绿色 */
html.dark .chroma .mi, html.dark .chroma .mf, html.dark .chroma .mb { color: #bd93f9 !important; } /* 数字: 紫色 */
html.dark .chroma .na { color: #50fa7b !important; } /* 属性名: 绿色 */
html.dark .chroma .nt { color: #ff79c6 !important; } /* 标签名: 粉色 */
html.dark .chroma .nb { color: #8be9fd !important; } /* 内置对象: 浅蓝 */
```
### 3. 功能脚本
包含注入 Loader HTML 的代码和复制/折叠逻辑
新建static/js/app.js文件，内容：
```JavaScript
/* ====================================================================
   Final JS Code: Halo Loader & Code Tools Logic
   ==================================================================== */

// 1. 动态注入 Halo 动画 HTML (使用 document.write 确保极早期加载)
(function() {
  const loaderHTML = `
    <div id="halo-racer-loader">
      <div class="racer-container">
        <div class="bar p1"></div>
        <div class="bar p2"></div>
        <div class="bar red"></div>
      </div>
    </div>
  `;
  document.write(loaderHTML);
})();

// 2. 核心逻辑：代码块按钮 (复制 + 折叠)
function attachCodeBlockTools() {
    const svgCopy = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    const svgCheck = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    const svgFold = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    const svgUnfold = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>';

    // 检查代码块是否已经存在
    const codeBlocks = document.querySelectorAll('.highlight');
    if (codeBlocks.length === 0) {
        // 如果没有找到，退出函数
        return;
    }
    
    codeBlocks.forEach(block => {
        // 避免重复添加工具栏
        if (block.querySelector('.code-tools')) return; 
        
        const tools = document.createElement('div');
        tools.className = 'code-tools';

        // 折叠按钮
        const foldBtn = document.createElement('button');
        foldBtn.className = 'c-btn';
        foldBtn.innerHTML = svgFold;
        foldBtn.title = "折叠/展开";
        let isFolded = false;
        
        // 核心修复点：折叠事件监听
        foldBtn.addEventListener('click', () => {
            isFolded = !isFolded;
            block.classList.toggle('folded');
            foldBtn.innerHTML = isFolded ? svgUnfold : svgFold;
        });

        // 复制按钮
        const copyBtn = document.createElement('button');
        copyBtn.className = 'c-btn';
        copyBtn.innerHTML = svgCopy;
        copyBtn.title = "复制";
        
        copyBtn.addEventListener('click', () => {
            const codeElement = block.querySelector('td:last-child pre code') || block.querySelector('code');
            const codeText = codeElement ? codeElement.innerText : block.innerText;
            
            navigator.clipboard.writeText(codeText).then(() => {
                copyBtn.innerHTML = svgCheck;
                copyBtn.style.color = '#4caf50';
                setTimeout(() => { copyBtn.innerHTML = svgCopy; copyBtn.style.color = ''; }, 2000);
            });
        });

        tools.appendChild(foldBtn);
        tools.appendChild(copyBtn);
        block.appendChild(tools);
    });
}


// 3. 事件监听 (确保在 DOM 加载完成后执行)
document.addEventListener('DOMContentLoaded', attachCodeBlockTools);


// 4. 动画消失逻辑 (需要等待所有资源加载完)
window.addEventListener('load', function() {
    const loader = document.getElementById('halo-racer-loader');
    if (!loader) return; 

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 300);
    }, 1000); 
});

// 5. 5秒超时安全移除 (兜底)
setTimeout(function() { 
    const loader = document.getElementById('halo-racer-loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden'); 
    }
}, 5000);
```
### 4. 背面内容
新建layouts/partials/back.html文件，内容：
```html
<div class="dream-grid dream-grid-about">
  
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 dream-column">
    <article class="card bg-base-100 shadow-xl dark:border dark:border-base-content/30">
      <div class="card-body">
        <div class="card-title">
          <a href="/about" class="hover:underline" style="text-decoration: none;">
            关于我 <ion-icon name="arrow-forward-outline" style="font-size: 0.8em; opacity: 0.5;"></ion-icon>
          </a>
        </div>
        
        <div class="prose dark:prose-invert">
          <p>{{ site.Params.description | markdownify }}</p>
          <div style="margin-top: 15px;">
            <a href="/about" class="btn btn-sm btn-primary" style="text-decoration: none;">
              查看详细介绍
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>

  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 dream-column">
    <article class="card bg-base-100 shadow-xl dark:border dark:border-base-content/30">
      <div class="card-body">
        <div class="card-title">社交链接</div>
        
        <ul class="menu menu-horizontal flex-wrap w-full px-0">
          
          {{ range site.Params.navItems }}
            {{/* 排除 home/about 这两个内部链接 */}}
            {{ if ne .title "首页" }} 
              {{ if ne .title "关于" }}
              <li>
                <a href="{{ .href }}" target="_blank" title="{{ .title }}" style="font-size: 1.5rem;">
                  <ion-icon name="{{ .icon }}"></ion-icon>
                </a>
              </li>
              {{ end }}
            {{ end }}
          {{ end }}

        </ul>
      </div>
    </article>
  </div>

</div>
```
### 5. 隐藏页面社交图标
新建layouts/partials/share.html文件，内容空白
### 6. 底部Powered by信息修改
复制主题里的footerLeft.html至相应文件夹，也就是layouts/partials/footerLeft.html，修改相应内容

### 总结：创建/覆盖的方式以到达所需功能。


## 五、编写文章
### 1. 生成文章文件
```bash
hugo new content posts/my-first-post.md
```

## 六、GitHub Pages部署推送
使用 GitHub Pages 是最经典、也是最“原教旨主义”的静态博客托管方式。完全免费，而且极其稳定。

既然您选择用 GitHub Pages，我们需要稍微调整一下策略。现在的 GitHub Pages 已经进化了，不需要您在本地手动生成 public 文件夹再上传，而是直接上传源码，让 GitHub 帮您自动生成和发布（利用 GitHub Actions）。

请按照这 4 步 稳扎稳打：

### 1. 创建专用仓库 (Repository)
这是最关键的一步，名字不能乱起。

* 登录 GitHub。

* 点击右上角 + -> New repository。

* Repository name (仓库名)：

  * 必须写成： 您的GitHub用户名.github.io

  * 例如：如果您的用户名是 xuhxjx，仓库名必须是 xuhxjx.github.io。

* Privacy：必须选 Public (公开)。（免费版 GitHub Pages 只能用于公开仓库）。

* 点击 Create repository。

### 2. 修改 hugo.toml 的 BaseURL
GitHub Pages 对网址非常敏感，必须配置正确。

请打开 VS Code 里的 hugo.toml，修改第一行：
```Ini, TOML
# 把这里改成您刚才创建的仓库名地址
# 注意：一定要以 / 结尾
baseURL = "https://您的用户名.github.io/"
```
### 3. 上传源码 (Git 推送)
回到 VS Code，打开终端（Terminal），依次输入以下命令（把源码推送到 GitHub）：

(注意：请确保您把之前的 public 和 resources 文件夹删了，我们要传的是干净的源码)
```bash
# 1. 初始化 Git (如果之前做过，这步会提示已存在，没关系)
git init

# 2. 把所有文件加入暂存区
git add .

# 3. 提交说明
git commit -m "我的博客第一次提交"

# 4. 关联远程仓库 (请把下面的地址换成您刚才创建的仓库地址)
git remote add origin https://github.com/您的用户名/您的用户名.github.io.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```
如果报错GitHub发现操作者 (xuhxjx) 不是仓库主人 (hxjxtwg)，所以直接 403 禁止访问。由于之前有hexo博客用的ssh方式推送，现在需要删除旧凭证。
你需要让电脑“忘掉”旧账号 xuhxjx，然后重新登录新账号 hxjxtwg。

请按照以下3步操作（Windows 系统）：

第一步：打开“凭据管理器”
* 按键盘上的 Win 键（开始菜单）。

* 直接打字搜索：凭据管理器 (或者搜 Credential Manager)。

* 点击打开它。

第二步：删除旧的 GitHub 凭据
* 在弹出的窗口里，点击 “Windows 凭据” (Windows Credentials)。

* 在下面的列表中找到 git:https://github.com 这一行。

* 点击它展开，然后点击 “删除” (Remove)。 (如果有多个关于 github 的，统统删掉)

这会导致：您刚登录了 Hugo 的账号，再去推 Hexo 时，电脑会自动用 Hugo 的账号去试，结果报错（403 禁止访问），然后您就得删凭据、重新登录……确实会非常崩溃。
但是！有一个**“一行代码”**的魔法设置，可以让 Windows “按仓库” 记住密码，而不是“按网站”记。这样两个账号就能完美共存，互不打架！

请按照下面 2 步 设置即可：
第一步：开启“独立记忆”模式（核心魔法）
请打开终端（CMD 或 VS Code 终端），输入下面这行命令并回车：
```bash
git config --global credential.useHttpPath true
```
这行命令的作用： 告诉电脑：“以后记住密码的时候，不要只记 github.com，要连后面的仓库名一起记（比如 github.com/xuhxjx/blog 和 github.com/hxjxtwg/blog 分开记）”。

这样，两个博客就会分别保存两套不同的账号密码，井水不犯河水。
现在我们设置新的帐号密码推送hugo
```bash
git config user.name "hxjxtwg"
git config user.email "您的Hugo新邮箱"
```
正式推送 (登录新号)
```bash
git push -u origin main
```
###关键时刻：

此时屏幕会弹出一个 GitHub 的登录框（或者浏览器弹窗）。

请务必在这个弹窗里，登录您的新账号 hxjxtwg！

(千万别顺手登成旧账号了)

登录成功后，终端会显示写入进度 Writing objects: 100%，最后显示 ... set up to track remote branch ...。

只要不报错，您的 Hugo 博客源码就成功上传了！

## 七、github源代码生成网页
上传的是 Hugo 的“源代码”（也就是那一堆配置文件和 Markdown），而不是最终生成的 网页文件 (index.html)。GitHub 现在看着您的源码一脸懵逼，不知道该显示什么。

我们需要去 GitHub 仓库里按一个开关，告诉它：“嗨，这是 Hugo 项目，请帮我自动生成并发布网页！”

### 1. 开启自动化构建 (GitHub Actions)
* 登录 GitHub，打开您的仓库页面：hxjxtwg/hxjxtwg.github.io

* 点击顶部导航栏最右边的 Settings (设置)。

* 在左侧边栏找到并点击 Pages。

* 关键操作： 在 "Build and deployment" (构建与部署) 区域：

  * 把 Source (来源) 从 Deploy from a branch 改成 👉 GitHub Actions。

### 2. 选择 Hugo 模板

* 改成 GitHub Actions 后，下方会出现一排推荐的框框。

* 找到写着 "Hugo" 的那个框（如果没有，就点击 "Browse all workflows" 搜 Hugo）。

* 点击 Configure (配置) 按钮。

* GitHub 会给您展示一个全是代码的页面（这是自动构建脚本），您什么都不用改。

* 直接点击右上角的绿色按钮 Commit changes...。

* 再点一次 Commit changes 确认。

### 3. 等待绿灯亮起

* 提交后，点击仓库顶部的 Actions 标签页。

* 您会看到有一个任务正在转圈圈（黄色），这是 GitHub 正在帮您生成网页。

* 等大概 30秒 到 1分钟，圈圈变成 绿色对号 ✅。

* 这时候，再去刷新您的网址 https://hxjxtwg.github.io，博客就出来了！

## 八、Hugo 博客日常写文章流程
### 1. 新建文章
在 VS Code 终端输入：
```bash
hugo new content posts/您的文章文件名.md
```
### 2. 编辑内容：

* 打开生成的 .md 文件。

* 重要： 记得把 draft: true 改成 false（或者直接删掉这一行），否则发上去也不显示。

* 写完正文。

### 3. 本地预览（可选，推荐）： 输入 hugo server，在本地 localhost:1313 看看效果好不好。

### 发布上线（三连击）： 确认没问题后，在终端依次输入：
```bash
git add .
git commit -m "写了一篇新文章"
git push
```
输入完 git push 后，等待 1-2 分钟，GitHub 会自动帮您构建并更新网页

###双博客切换指南
推 Hugo 时：在 Hugo 文件夹里，直接用 git push（电脑会自动用新账号）。

推 Hexo 时：在 Hexo 文件夹里，直接用 hexo d（电脑会自动用旧账号的 SSH）。

## 九、部署到平台
### 第一步：部署到 Vercel (最快，几秒钟)
### 1.打开 Vercel 官网 并登录（直接用 GitHub 账号登录）。

### 2. 点击控制台右上角的 “Add New ...” -> “Project”。

### 3. 在左侧列表里找到你的仓库 hxjxtwg/hxjxtwg.github.io，点击 “Import”。

### 4. 配置页面（关键点）：

* Framework Preset: Vercel 通常会自动识别为 Hugo。如果没识别，手动选一下 Hugo。

* Root Directory: 保持默认（.）。

* Build Command: 保持默认。

### 5. 点击 “Deploy”。

等待几十秒，撒花！🎉 你的博客就在 Vercel 上线了（会分配一个 xxx.vercel.app 的域名）。
### 第二步：部署到 Cloudflare Pages (速度最快，不限流量)
### 1. 打开 Cloudflare 官网 并登录。

### 2. 在左侧菜单点击 “Workers & Pages”。

### 3. 点击右边的蓝色按钮 “Create” (创建)。

### 4. 选择 “Pages” 标签页 -> 点击 “Connect to Git”。

### 5. 选择 GitHub 登录，并授权它访问你的仓库。

### 6. 在列表中选择 hxjxtwg.github.io，点击 “Begin setup”。

### 7. 配置页面（关键点）：

* Project name: 随便起（比如 my-blog）。

* Production branch: 选 main。

* Framework preset (框架预设): 一定要选 Hugo (这一步很重要，不选会失败)。

### 8. 点击 “Save and Deploy”。

等待一两分钟，搞定！🎉 你的博客也在 Cloudflare 上线了（分配 xxx.pages.dev 域名）。

⚠️ 唯一需要注意的小问题：baseURL
你的 hugo.toml 里写死了： baseURL = "https://hxjxtwg.github.io/"

这会导致一个现象：

* 你在 Vercel 或 Cloudflare 打开网站，看起来是正常的。

* 但是如果你点击网页上的 “首页” 按钮，或者某些内部链接，它可能会跳回 hxjxtwg.github.io（因为配置文件里写死在那了）。

✅ 解决方法（进阶）： 如果你希望这三个网站各自独立，互不跳转，你需要让 Hugo 能够根据环境自动改变 baseURL。

最简单的改法（推荐）： 把 hugo.toml 里的 baseURL 改成 相对路径（但这取决于 Dream 主题是否支持）：
```Ini, TOML
baseURL = "/"
```
(如果改成 / 后发现样式乱了，那就只能改回去，忍受一下跳转，或者只用一个主平台)。

#### 如果本地与github文件不符，需强制推送（Force Push）
```bash
git push -f origin main
```


