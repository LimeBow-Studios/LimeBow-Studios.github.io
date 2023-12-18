function addColorCSS(colors) {
    var colorCSS = "";

    colors.forEach(item => {
        colorCSS += `
            a.button#${item[0]} {
                display: inline-block;
                padding: 12px 24px;
                font-size: 16px;
                font-weight: bold;
                text-decoration: none;
                text-align: center;
                color: #ffffff;
                background-color: ${item[1]};
                border-radius: 4px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
                transition: background-color 0.3s ease;
            }

            a.button#${item[0]}:hover {
                background-color: ${item[2]};
            }

            a.button#${item[0]}:active {
                background-color: ${item[3]};
            }
        `;
    });

    // 创建一个style标签
    const styleTag = document.createElement('style');

    // 将CSS样式规则添加到style标签中
    styleTag.innerHTML = colorCSS;

    // 将style标签添加到head元素中
    document.head.appendChild(styleTag);
}

const colors = [
    ["blue", "#2196f3", "#1976d2", "#1565c0"],
    ["grey", "#9e9e9e", "#757575", "#616161"]
];

addColorCSS(colors)