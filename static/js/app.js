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