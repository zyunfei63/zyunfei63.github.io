// 使用DOMContentLoaded替代$(document).ready()
document.addEventListener('DOMContentLoaded', function() {


  function categoryUnfold() {

    const categoryLinks = document.querySelectorAll('.category-list-link');

    // 使用允许的console.warn代替console.log
    console.log('找到的分类链接:', categoryLinks.length);

    // 处理有子分类的链接
    categoryLinks.forEach(function(link, index) {
      console.log(`分类 ${index + 1}:`, link.textContent, link.href);
      // 查找同级元素中的.category-list-child
      const siblingChildren = link.parentElement.querySelectorAll(':scope > .category-list-child');

      if (siblingChildren.length > 0) {

        // 设置列表样式
        link.parentElement.style.listStyleImage = "url('/images/category-unfold-16x16.png')";

        // 阻止链接跳转
        link.href = 'javascript:void(0)';

        // 初始隐藏子分类
        siblingChildren.forEach(function(child) {
          child.style.display = 'none';
        });

        // 添加点击事件
        link.addEventListener('click', function() {
          siblingChildren.forEach(function(child) {
            // 切换显示/隐藏
            if (child.style.display === 'none') {
              child.style.display = 'block';
            } else {
              child.style.display = 'none';
            }
          });
        });
      }
    });
  }

  // 立即执行categoryUnfold函数
  categoryUnfold();
});
