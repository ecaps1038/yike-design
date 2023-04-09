import Button from './components/button/YkButton.vue'
import Icon from './components/icon/YkIcon.vue'
import Title from './components/typography/YkTitle.vue'
import Text from './components/typography/YkText.vue'
import Paragraph from './components/typography/YkParagraph.vue'
import Container from './components/container/YkContainer.vue'
import Space from './components/space/YkSpace.vue'
import Avatar from './components/avatar/YkAvatar.vue'
import AvatarGroup from './components/avatar/YkAvatarGroup.vue'
import Badge from './components/badge/YkBadge.vue'
import Crumb from './components/crumb/YkCrumb.vue'
import CrumbItem from './components/crumb/CrumbItem.vue'


import type { Component } from 'vue'


const components: {
  [propName: string]: Component //字面量类型，每个属性值类型为组件的类型
} = {
  Button,
  Icon,
  Title,
  Text,
  Paragraph,
  Container,
  Space,
  Avatar,
  AvatarGroup,
  Badge,
  Crumb,
  CrumbItem,
};

const install = (app: any) => {
  // 全局挂载 原型函数 过组件实例调用的属性   this.$message
  for (const componentItme in components) {
    app.component(componentItme, components[componentItme])
  }
}

//按需引入使用
export {
  install,//全局
  Button,//按钮
  Icon,//图标
  Title,//标题
  Text,//文字
  Paragraph,//段落
  Container,//区域块
  Space,//间距
  Avatar,//头像
  AvatarGroup,//头像组
  Badge,//徽标
  Crumb,//面包屑
  CrumbItem,//面包屑节点
}