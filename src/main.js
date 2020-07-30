const red = dom.find(".red", test1)[0]; // 获取对应的元素
console.log(red);
dom.style(test1, "color", "blue"); // 设置 test1.style.color
const redList = dom.find(".red"); // 获取多个class为red 的元素
console.log(redList);
dom.each(redList, (n) => console.log(n)); // 遍历 redList 里的所有元素
