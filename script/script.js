function setBlockTitleActive(id) {
    var blockID = parseInt(id) - 1
    var blockList = ["block-1", "block-2", "block-3", "block-4", "block-5"];
    var blockClass = blockList[blockID];
    var otherBlockList = blockList.filter(function (list) {
        return list !== blockClass;
    });

    function setBlockChapterTitle(id) {
        var chapterID = parseInt(id)
        // 获取<h1>标签元素
        var chapterTitle = document.querySelector('.chapter-title');
        // 修改<h1>标签的内容
        chapterTitle.textContent = chapterList[chapterID];
    }

    // 找到class为blockClass的li
    var block = document.querySelector(`.${blockClass}`);
    block.classList.add("is-active");

    // 删除其他block的active
    for (let i = 0; i < otherBlockList.length; i++) {
        var className = otherBlockList[i];
        var tempBlock = document.querySelector(`.${className}`);
        tempBlock.classList.remove("is-active");
    };

    // 设置章节标题
    setBlockChapterTitle(blockID);

    return true;
}

var chapterList = ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5"]
// 获取<h1>标签元素
var chapterTitle = document.querySelector('.chapter-title');
// 修改<h1>标签的内容
chapterTitle.textContent = chapterList[0];

