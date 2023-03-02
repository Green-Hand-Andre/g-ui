```
npm i webpack webpack-cli webpack-dev-server -D
npm i html-webpack-plugin -D
npm i vue -D
npm i vue-loader -D
npm i vue-template-compiler -D

//安装样式库
npm i sass sass-loader -D
npm i style-loader css-loader -D



//安装依赖
npm i gulp gulp-cli -D
npm i gulp-sass gulp-sass-glob -D
npm i sass node-sass -D
npm i gulp-postcss post css cssnano autoprefixer -D 

npm version patch -m "构建本地测试包"
npm pack


//服务器安装私服
npm install --location=global verdaccio

//创建软连接实现全局有效
ln -s /root/node-v12.13.0-linux-x64/bin/verdaccio /usr/local/bin/

//放开指定端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent

//修改配置文件
vim /root/.config/verdaccio/config.yaml

```


