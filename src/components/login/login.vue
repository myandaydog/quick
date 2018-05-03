<template>
  <div id="login">
      <h2>快抢单管理后台</h2>
      <div class="login">
         <p class="p1">登录</p>
         <input class="tel" type="tel" maxlength="11" placeholder="请输入手机号码" v-model="mobile">
         <input class="pass" type="password" placeholder="请输入您的密码" v-model="passWord">
         <button @click='login'>登录</button>
         <div class="remember">
           <input id="checkbox-pro" type="checkbox" v-model="check">
           <label for="checkbox-pro" class="checkbox-core">记住密码</label>
         </div>
         <p class="p2"><router-link :to="{path:'/forgetPassword'}">忘记密码</router-link>? | 立即<router-link :to="{path:'/'}">注册</router-link></p>
      </div>
  </div>
</template>
<script>
import apiEp from './../../api/api';
    export default {
        data () {
            return {
               mobile: this.$store.getters.userMobile || window.localStorage.userMobile || '',
               passWord: this.$store.getters.passWord || window.localStorage.passWord || '',
               check: '',
               menuList:
                [{
                    namePath:'',
                    value:'快抢单',
                    children:
                    [{
                        namePath: 'grabSingle',
                        value: '抢单'
                    },
                    {
                        namePath: 'order',
                        value: '订单'
                    }]
                },
                {
                    namePath:'',
                    value:'客户信息',
                    children:
                    [{
                        namePath: 'channelUser',
                        value: '渠道用户列表'
                    },
                    {
                        namePath: 'borrowUser',
                        value: '借款用户列表'
                    },
                    {
                        namePath: 'loanUser',
                        value: '放款用户列表'
                    }]
                },
                {
                    namePath:'',
                    value:'财务管理',
                    children:
                    [{
                        namePath: 'rechargeRecord',
                        value: '充值记录'
                    },
                    {
                        namePath: 'shopping',
                        value: '消费记录'
                    },
                    {
                        namePath: 'channelCount',
                        value: '渠道统计'
                    },
                    {
                        namePath: 'accountMessage',
                        value: '对账信息'
                    }]
                },
                {
                    namePath:'',
                    value:'个人设置',
                    children:
                    [{
                        namePath: 'userMessage',
                        value: '个人信息'
                    },
                    {
                        namePath: 'revisePassword',
                        value: '修改密码'
                    }]
                },
                ]
            }
        },
        methods:{
          login() {
            let menuList = JSON.stringify(this.menuList)
            this.$store.commit('setMenuList', menuList)
            console.log(this.$store.getters.menuList)
            this.$router.push({path:'menu/'+JSON.parse(this.$store.getters.menuList)[0].children[0].namePath})

            // console.log(this.check)
            // if (this.check) {
            //     window.localStorage.userMobile = this.mobile
            //     window.localStorage.passWord = this.passWord
            // }
            // this.$http
            //     .post(apiEp.login, {}, {params:{
            //         username: this.mobile,
            //         password: this.passWord
            //     }})
            //     .then(res => {
            //       if (res.data.code == "0001") {
            //          return this.$Notice.error({
            //             desc: res.data.message || "请求失败",
            //          });
            //       }
            //       if (res.data.code == "0000") {
            //         this.$Notice.success({
            //             desc: res.data.message || "请求成功",
            //          });
            //         // this.$router.push({path:'/login'})
            //       }
            //     })
            //     .catch(err => {
            //       console.log(err);
            //     });
          }
         
        }
    }
</script>

<style lang="scss" scoped>
    @import "login.scss";
</style>
