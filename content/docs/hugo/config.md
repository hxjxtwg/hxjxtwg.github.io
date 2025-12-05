---
title: "配置说明"
weight: 20
---

## 一、hugo.yaml文件
在hugo根目录下新建hugo.yaml文件，并删掉原hugo.toml文件。
{{< details title="yaml" >}}
```yaml
# -------------------------------------------------------------------------
# 核心修正：指定本地主题文件夹，而不是用 module 远程加载
# -------------------------------------------------------------------------
theme: "hextra"
# -------------------------------------------------------------------------

baseURL: "http://localhost:1313/"
title: "我的 Hextra 站点"

enableRobotsTXT: true
enableGitInfo: true
hasCJKLanguage: true

outputs:
  home: [html]
  page: [html]
  section: [html, rss]

# 默认语言
defaultContentLanguage: zh-cn

languages:
  # === 现有的中文配置 ===
  zh-cn:
    languageName: 简体中文
    languageCode: zh-CN
    weight: 1
    title: "我的 Hextra 站点"
    contentDir: content # 默认内容目录

  # === 👇 新增：英文配置 ===
  en:
    languageName: English
    languageCode: en-US
    weight: 2
    title: "My Hextra Site"
    contentDir: content # 如果你使用文件名后缀区分语言（推荐），这里也填 content

# 注意：module 模块已被删除，以防止报错

markup:
  highlight:
    noClasses: false
  goldmark:
    renderer:
      unsafe: true
    extensions:
      passthrough:
        delimiters:
          block: [['\[', '\]'], ['$$', '$$']]
          inline: [['\(', '\)']]
        enable: true

menu:
  main:
    - name: 文档
      pageRef: /docs
      weight: 1
    - name: 博客
      pageRef: /blog
      weight: 2
    - name: 搜索
      weight: 3
      params:
        type: search
    - name: GitHub
      weight: 4
      url: "https://github.com/hxjxtwg/hxjxtwg.github.io"
      params:
        icon: github
    - name: Email
      url: "mailto:xuhxjxhk@mail.com"
      weight: 5
      params:
        icon: mail    # 或者是 at-symbol

params:
  description: "xxsky的个人网站，记录学习笔记与生活点滴。"
  navbar:
    displayTitle: true
    displayLogo: true
    logo:
      path: images/logo.svg
      dark: images/logo-dark.svg
      link: /
      width: 40
      height: 40 


  # 搜索设置
  search:
    enable: true
    type: flexsearch
    flexsearch:
      index: content
      tokenize: forward

  footer:
    enable: true
    displayPoweredBy: false  # 隐藏 "由 Hextra 驱动"
    displayCopyright: true   # 显示版权信息
    # 👇 支持 HTML 写法，把链接换成你的
    width: normal

  page:
    width: normal
    
  # 博客列表设置
  blog:
    list:
      displayTags: true
      sortBy: date
      sortOrder: desc
      pagerSize: 20
  
  #评论系统 
  comments:
    enable: true
    type: "giscus"
    giscus:
      repo: "hxjxtwg/hxjxtwg.github.io"      # 你的仓库名
      repoId: "R_kgDOQhrNHw"                 # 你的仓库 ID
      category: "Announcements"              # 分类名
      categoryId: "DIC_kwDOQhrNH84CzbsH"     # 分类 ID
      mapping: "pathname"                    # 映射方式
      loading: "lazy"                        # 懒加载
      lang: "zh-CN"                          # 语言
```

{{< /details >}}

## 二、添加加载动画
#### 1. 复制hugo\themes\hextra\layouts\_partials\navbar.html
#### 至hugo\layouts\_partials目录下

#### 2. 打开navbar.html，在顶部第1行开始添加如下代码：

{{< details title="加载动画" >}}
```html
<div id="halo-racer-loader">
  <div class="racer-container">
    <div class="bar p1"></div>
    <div class="bar p2"></div>
    <div class="bar red"></div>
  </div>
</div>

<style>
  #halo-racer-loader { 
    position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;      
    width: 100% !important; height: 100% !important; 
    z-index: 999999999 !important; 
    background: #ffffff; 
    display: flex !important; justify-content: center !important; align-items: center !important; 
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  html.dark #halo-racer-loader { background: #1a1a1a; }
  #halo-racer-loader.hidden { opacity: 0; visibility: hidden; }

  .racer-container { position: relative; width: 80px; height: 20px; }
  .bar { position: absolute; top: 0; left: 0; width: 12px; height: 20px; border-radius: 0; }
  .p1 { background: rgba(255,71,87,0.2); z-index:1; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0.15s; }
  .p2 { background: rgba(255,71,87,0.5); z-index:2; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0.08s; }
  .red { background: #ff4757; z-index:10; animation: run 1.5s cubic-bezier(.4,0,.2,1) infinite 0s; }
  @keyframes run { 0%{left:0} 30%{left:68px} 50%{left:68px} 80%{left:0} 100%{left:0} }
</style>

<script>
  window.addEventListener('load', function() {
    const loader = document.getElementById('halo-racer-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none'; 
            setTimeout(() => { loader.style.display = 'none'; }, 300);
        }, 800);
    }
  });
  
  // 超时兜底
  setTimeout(() => { 
      const loader = document.getElementById('halo-racer-loader');
      if (loader) {
          loader.style.display = 'none'; 
          loader.style.pointerEvents = 'none';
      }
  }, 5000);
</script>
```
{{< /details >}}

## 三、底部版权信息
复制hugo\temes\i18n\zh-cn.yaml至hugo\i18n\
修改zh-cn.yaml文件

## 四、站点图标
与主题static目录下位置名称相对应替换

## 五、文档博客
### 1. content文件夹
1.1 索引文件_index.md,也就是首页

{{< details title="首页索引" >}}
```bash
---
title: Welcome to the xxsky website
---

{{< hextra/hero-headline >}}
  # 探索我的数字花园 🌿
  
  这里记录技术文档、生活随笔和个人项目。
  <br>
  <small style="font-size: 0.5em; font-weight: normal; opacity: 0.7;">简洁 · 高效 · 现代</small>
{{< /hextra/hero-headline >}}

{{< hextra/feature-grid >}}

  {{< hextra/feature-card
    title="查阅文档"
    subtitle="查看我的学习笔记和技术手册"
    icon="book-open"
    link="/docs"
    linkText="开始阅读"
  >}}

  {{< hextra/feature-card
    title="最新博客"
    subtitle="分享我的思考、教程和动态"
    icon="pencil"
    link="/blog"
    linkText="阅读文章"
  >}}

  {{< hextra/feature-card
    title="关于我"
    subtitle="了解更多关于作者的信息"
    icon="user"
    link="/about"
    linkText="认识一下"
  >}}

  {{< hextra/feature-card
    title="开源项目"
    subtitle="访问我的 GitHub 仓库"
    icon="github"
    link="https://github.com/hxjxtwg"
    linkText="去看看"
  >}}

{{< /hextra/feature-grid >}}

---

### 🌟 最近更新

hugo-hextra安装配置文档
```
{{< /details >}}

1.2 关于about.md

{{< details title="关于页面" >}}
```bash
---
title: "关于我"
date: 2025-12-05
layout: "standard" # 使用标准布局

# 👇 关键：隐藏左侧边栏，让内容居中显示，更像个人主页
sidebar:
  enable: false

# 👇 关键：自动把它加到顶部导航栏
menu:
  main:
    weight: 50 # 数字越大越靠右
    params: 
      icon: user # 给菜单加个小图标 (可选)

# 👇 如果不想让关于页面显示评论，设为 false
comments: false 
---

###  hello xxsky

记录生活
专注世界

---

{{< callout type="info" emoji="🛠️" >}}
**我的技术栈：**
* **前端：** HTML, CSS, Hugo
* **后端：** Python, Go
{{< /callout >}}

---

###  我的经历

-------
{{< steps >}}
2025.12建立了hugo站点-----------------------------------------------------------------

2025.08建立了tpyecheo-----------------------------------------------------------------

2025.06建立了hexo博客-----------------------------------------------------------------
-------

{{< /steps >}}

---

###  联系我

{{< cards >}}
  {{< card link="https://github.com/xuhxjx" title="GitHub" icon="github" >}}
  {{< card link="mailto:hxjxtw@gmail.com" title="Email" icon="mail" >}}
{{< /cards >}}
```
{{< /details >}}

1.3 新建docs与bolg文件
分别是文档与博客的文件夹

### 2. 博客
2.1 blog索引
```bash
---
title: xxsky blog
type: blog # 关键：告诉主题这是一个博客板块
cascade:
  type: blog # 让下面所有的文章都继承这个属性
sidebar:
  enable: true # 博客通常保留右侧目录比较方便，或者设为 false 看你喜好
---
```
2.2 博客首页卡片显示
在hugo\layouts\blog\list.html
{{< details title="博客卡片列表" >}}

```html
{{ define "main" }}

<div class="custom-blog-container">
  
  <h1 class="blog-page-title">{{ .Title }}</h1>

  <div class="blog-grid">
    {{ range .Pages }}
      <a href="{{ .RelPermalink }}" class="blog-card">
        
        <div class="card-body">
          {{ with .Params.tags }}
          <div class="card-tags">
            {{ range first 3 . }}
              <span class="tag">#{{ . }}</span>
            {{ end }}
          </div>
          {{ end }}

          <h2 class="card-title">{{ .Title }}</h2>

          <p class="card-summary">
            {{ .Summary | plainify | truncate 80 }}
          </p>
        </div>

        <div class="card-footer">
          <span class="card-date">{{ .Date.Format "2006-01-02" }}</span>
          <span class="card-link">阅读全文 &rarr;</span>
        </div>
      </a>
    {{ end }}
  </div>
</div>

<style>
  /* 容器布局 */
  .custom-blog-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .blog-page-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    color: inherit;
  }

  /* 网格布局：自动适应，每列最少300px宽 */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  /* 卡片样式 */
  .blog-card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none !important; /* 去掉下划线 */
    color: inherit !important;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  /* 鼠标悬停效果 */
  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-color: #3b82f6; /* 蓝色边框 */
  }

  .card-body {
    padding: 24px;
    flex: 1; /* 让内容区撑满 */
  }

  /* 标签样式 */
  .card-tags {
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .tag {
    font-size: 0.75rem;
    background-color: #eff6ff;
    color: #3b82f6;
    padding: 2px 8px;
    border-radius: 999px;
  }

  /* 标题样式 */
  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.4;
    color: #111827;
  }

  /* 摘要样式 */
  .card-summary {
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
  }

  /* 底部样式 */
  .card-footer {
    padding: 16px 24px;
    background-color: #f9fafb;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: #6b7280;
  }

  .card-link {
    color: #3b82f6;
    font-weight: 600;
  }

  /* === 深色模式适配 (Dark Mode) === */
  html.dark .blog-card {
    background-color: #1a1a1a;
    border-color: #333;
  }
  html.dark .card-title { color: #f3f4f6; }
  html.dark .card-summary { color: #9ca3af; }
  html.dark .card-footer {
    background-color: #262626;
    border-color: #333;
  }
  html.dark .tag {
    background-color: rgba(59, 130, 246, 0.2);
    color: #93c5fd;
  }
</style>

{{ end }}
```
{{< /details >}}

2.2 博文显示日期
在hugo\layouts\blog\single.html
复制主题single.html到相应目录下并替换下面相同段
```html
{{- with $date := .Date }}<span class="hx:mr-1">{{ $date.Format "2006-01-02" }}</span>{{ end -}}
```
### 3. 文档
3.1 文档主索引
```bash
title: 文档中心
cascade:
  type: docs
---

欢迎来到文档中心！请在左侧选择你感兴趣的章节。
```
3.2 每个文件夹索引
```bash
---
title: "hugo-hextra搭建教程"
weight: 1
---
```
3.3 其它语法
查看官方文档：https://imfing.github.io/hextra/zh-cn/docs/guide/organize-files/