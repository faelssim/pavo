---
title: "Git合并其他仓库代码"
date: "2022-09-09"
---

#### 有时候我们会遇到需要把其他仓库的某个分支代码拉进来，然后合并的操作。那么具体应怎么做呢？

<ul>
    <li>1. <kbd>git add remote newlib git@github...</kbd></li>
    <li>2. <kbd>git fetch newlib</kbd></li>
    <li>3. <kbd>git switch -c newbranch newlib/master</kbd></li>
    <li>4. 选择要合并的分支，执行<kbd>git meage newbranch</kbd></li>
</ul>