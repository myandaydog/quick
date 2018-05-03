import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register/register' // 注册
import login from '@/components/login/login' // 登录
import forgetPassword from '@/components/forgetPassword/forgetPassword' // 忘记密码
import protocol from '@/components/protocol/protocol' // 平台服务协议
import menu from '@/components/menu/menu' // 主页
import grabSingle from '@/components/grabSingle/grabSingle' // 抢单
import loanParticulars from '@/components/loanParticulars/loanParticulars' // 借款人详情
import order from '@/components/order/order' // 订单

import channelUser from '@/components/channelUser/channelUser' // 渠道用户列表
import borrowUser from '@/components/borrowUser/borrowUser' // 借款用户列表
import loanUser from '@/components/loanUser/loanUser' // 放款用户列表

import rechargeRecord from '@/components/rechargeRecord/rechargeRecord' // 充值记录
import shopping from '@/components/shopping/shopping' // 消费记录
import channelCount from '@/components/channelCount/channelCount' // 渠道统计
import accountMessage from '@/components/accountMessage/accountMessage' // 对账信息

import userMessage from '@/components/userMessage/userMessage' // 个人信息
import revisePassword from '@/components/revisePassword/revisePassword' // 修改密码

Vue.use(Router)

const router = new Router({
  // linkActiveClass:'list-active',
  routes: [
    {
      path: '/',
      // redirect:'/view1',
      name: 'register',
      component: register,
      meta: {
       title: '注册'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
       title: '登录'
      },
    },
    {
      path: '/forgetPassword',
      name: '忘记密码',
      component:forgetPassword
    },
    {
      path: '/menu',
      name: '主页',
      component: menu,
      children: [
        {
          path: 'grabSingle',
          name: '订单',
          component: grabSingle
        },
        {
          path: 'order',
          name: '抢单',
          component: order
        },
        {
          path: 'loanParticulars',
          name: '借款人详情',
          component: loanParticulars
        },
        {
          path: 'channelUser',
          name: '渠道用户列表',
          component: channelUser
        },
        {
          path: 'borrowUser',
          name: '借款用户列表',
          component: borrowUser
        },
        {
          path: 'loanUser',
          name: '放款用户列表',
          component: loanUser
        },
        {
          path: 'rechargeRecord',
          name: '充值记录',
          component: rechargeRecord
        },
        {
          path: 'shopping',
          name: '消费记录',
          component: shopping
        },
        {
          path: 'channelCount',
          name: '渠道统计',
          component: channelCount
        },
        {
          path: 'accountMessage',
          name: '对账信息',
          component: accountMessage
        },
        {
          path: 'userMessage',
          name: '个人信息',
          component: userMessage
        },
        {
          path: 'revisePassword',
          name: '修改密码',
          component: revisePassword
        },
      ]
    },
    {
      path: '/protocol',
      name: '平台注册协议',
      component:protocol
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '快抢单后台';
  next()
})

export default router











