这是一个让学习如何编写正则表达式变得容易的项目。

## 支持功能

- **渐进学习**
- **互动**
- **快捷方式友好**
- **备忘单**
- **游乐场**

## 使用方法

```bash
npm install

# 本地开发使用
npm run dev # 启动开发模式

# 放在服务器使用
npm run build # 编译静态文件
npm run start # 启动服务器运行静态文件
```

## 使用 docker 部署

```bash
# 构建镜像
docker build -t reg .
# 启动镜像，映射本地3400端口，启动完成访问localhost:3400即可访问
docker run -d -p 3400:3000 --name reg reg
```
