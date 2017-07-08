# GIT USE

## 解决冲突
### push的时候可能会产生冲突
> 解决方式
1. 先把要提交的代码commit后，将未提交的代码git stash,再从远程pull下来，push提交代码，之后git stash pop取回未提交的代码