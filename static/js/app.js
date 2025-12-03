// 1. 注入 Halo 动画
(function() {
  const loaderHTML = `<div id="halo-racer-loader"><div class="racer-container"><div class="bar p1"></div><div class="bar p2"></div><div class="bar red"></div></div></div>`;
  document.write(loaderHTML);
  window.addEventListener('load', function() {
    const loader = document.getElementById('halo-racer-loader');
    if(loader) setTimeout(() => { loader.classList.add('hidden'); setTimeout(() => { loader.style.display = 'none'; }, 300); }, 1000);
  });
})();

// 2. 代码块按钮逻辑
function attachCodeBlockTools() {
    const svgCopy = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    const svgCheck = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    const svgFold = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    const svgUnfold = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>';

    const codeBlocks = document.querySelectorAll('.highlight');
    if (codeBlocks.length === 0) return;
    
    codeBlocks.forEach(block => {
        if (block.querySelector('.code-tools')) return; 
        
        const tools = document.createElement('div');
        tools.className = 'code-tools';

        // 折叠按钮
        const btnFold = document.createElement('button');
        btnFold.className = 'c-btn';
        btnFold.innerHTML = svgFold;
        btnFold.title = "折叠/展开";
        let isFolded = false;
        btnFold.onclick = () => {
            isFolded = !isFolded;
            block.classList.toggle('folded');
            btnFold.innerHTML = isFolded ? svgUnfold : svgFold;
        };

        // 复制按钮
        const btnCopy = document.createElement('button');
        btnCopy.className = 'c-btn';
        btnCopy.innerHTML = svgCopy;
        btnCopy.title = "复制";
        btnCopy.onclick = () => {
            const codeElement = block.querySelector('td:last-child pre code') || block.querySelector('code');
            const codeText = codeElement ? codeElement.innerText : block.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                btnCopy.innerHTML = svgCheck;
                btnCopy.style.color = '#4caf50';
                setTimeout(() => { btnCopy.innerHTML = svgCopy; btnCopy.style.color = ''; }, 2000);
            });
        };

        tools.appendChild(btnFold);
        tools.appendChild(btnCopy);
        
        // 【关键】插入到 block 的最前面，而不是 appendChild (放在最后面会被挤下去)
        block.insertBefore(tools, block.firstChild);
    });
}

document.addEventListener('DOMContentLoaded', attachCodeBlockTools);

// 兜底超时
setTimeout(function() { 
    const loader = document.getElementById('halo-racer-loader');
    if (loader && !loader.classList.contains('hidden')) loader.classList.add('hidden'); 
}, 5000);