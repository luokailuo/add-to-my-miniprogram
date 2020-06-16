# add-to-my-miniprogram 添加到我的小程序

一个微信小程序UI组件，用于提示用户将目标小程序「添加到我的小程序」中。

# 使用

1. 点击右上角「Clone or download」按钮，仓库克隆/下载至本地后，将「add-to-my-miniprogram」目录引入自己的微信小程序项目中，例如 `/components/add-to-my-miniprogram/`。
2. 在全局配置文件`app.json`或页面配置文件`index.json`中引入组件。
```
{
  "usingComponents": {
    "add-to-my-miniprogram": "/components/add-to-my-miniprogram/index"
  }
}
```
3. 在`index.wxml`文件中，调用组件即可。
```
<add-to-my-miniprogram duration="{{10}}">
  <view slot="content">
	  添加到我的小程序，微信首页下拉访问更便捷 ×
	</view>
</add-to-my-miniprogram>
```

# API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| duration | 显示时长(秒) | Number | 6 |


# Slot

| 名称      | 说明                                      |
|----------|------------------------------------------|
| content | 提示内容 |

## 扫码体验 

也可以扫描👇微信小程序码体验实际效果

![](./minicode.jpg)
