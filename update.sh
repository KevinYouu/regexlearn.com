#!/bin/bash
echo 请输入更新内容:
read -r m
echo 更新日志中...
System=$(uname -s)
if [ "$System" == "Darwin" ]; then
    echo "Use MacOS"
    sed -i '' "1a\
    ####  $(date '+%Y-%m-%d %H:%M:%S %A') \
    $m
    " ChangeLog.md
elif [ "$System" == "Linux" ]; then
    echo "Use Linux"
    sed -i "2 i #### $(date '+%Y-%m-%d %H:%M:%S %A') \n $m" ChangeLog.md
else
    echo "Other OS: $System"
fi
gitRemote=$(git remote)
# 获取分支数量
branchNum=$(git branch | wc -l)
echo 当前分支数量: "$branchNum"
# 获取当前分支名
branchName=$(git symbolic-ref --short -q HEAD)
echo "$branchName"
git add .
git commit -m "$m"
# 兼容处理
for i in $gitRemote; do
    # echo "$i"
    # 如果i等于origin则跳过,否则推送
    if [ "$i" == "origin" ] && [ "$branchNum" -gt 1 ]; then
        echo "不推送origin"
    else
        echo "推送$i"
        git push "$i" "$branchName"
    fi
done
