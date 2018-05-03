<template>
    <div id="register">
        <h2>快抢单管理后台</h2>
        <div class="register">
            <span></span>
            <p class="p1">注册</p>
            <input class="tel" type="tel" maxlength="11" placeholder="请输入正确的手机号码" v-model="mobile">
            <div class="message">
                <input class="text" type="text" maxlength="4" placeholder="请输入短信验证码" v-model="smsCode">
                <button @click="sendSmsCode" :disabled="count<60">{{count==60?'发送验证码':count+'s后重新获取'}}</button>
            </div>
            <input class="passwordOne" type="password" placeholder="请输入密码" v-model="passwordOne">
            <input class="passwordTwo" type="password" placeholder="请再次输入密码" v-model="passwordTwo">
            <p class="p2">注册即同意<router-link :to="{path:'/protocol'}">《平台服务协议》</router-link></p>
            <button class="btn" @click="login">确认注册</button>
            <p class="p3">已有账号，立即<router-link :to="{path:'/login'}">登录</router-link></p>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
import apiEp from './../../api/api';
    export default {
        data () {
            return {
                mobile: '',
                smsCode: '',
                passwordOne: '',
                passwordTwo: '',
                count: 60
            }
        },
        methods:{
            /* 发送验证码 */
            sendSmsCode() {
              if (!this.mobile) {
                return this.$Notice.error({
                    desc: '请输入手机号码',
                });
              }
              if (this.mobile && !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.mobile)) {
                return this.$Notice.error({
                    desc: '手机号码格式错误,请重新输入',
                });
              }
              this.$http
                .post(apiEp.sendSmsCode, {}, {params:{
                    userName: this.mobile
                }})
                .then(res => {
                  if (res.data.code == "0001") {
                     return this.$Notice.error({
                        desc: res.data.message || "请求失败",
                     });
                  }
                  if (res.data.code == "0000") {
                    this.$Notice.success({
                        desc: res.data.message || "请求成功",
                        
                     });
                    this.countDown();
                    return;
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            },
             /* 倒计时 */
            countDown() {
              if (this.count > 0) {
                this.count--;
                setTimeout(() => {
                  this.countDown();
                }, 1000);
              }
              if (this.count == 0) {
                this.count = 60;
              }
            },
            login() {
                const reg = /^[A-Za-z0-9]{6,12}$/
                if (!this.mobile) {
                    return this.$Notice.error({
                        desc: '请输入手机号码',
                    });
                  }
                  if (this.mobile && !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.mobile)) {
                    return this.$Notice.error({
                        desc: '手机号码格式错误,请重新输入',
                    });
                  }
                  if (!this.smsCode) {
                    return this.$Notice.error({
                        desc: '请输入验证码',
                    });
                  }
                  if(!this.passwordOne) {
                    return this.$Notice.error({
                        desc: '请输入密码',
                    });
                  }
                  if(!this.passwordTwo) {
                    return this.$Notice.error({
                        desc: '请再次确认密码',
                    });
                  }
                  if(!reg.test(this.passwordOne) || !reg.test(this.passwordTwo)){
                    return this.$Notice.error({
                        desc: '密码格式为6-12位字母或数字',
                    });
                  }
                  if(this.passwordOne != this.passwordTwo){
                    return this.$Notice.error({
                        desc: '两次输入密码不一致',
                    });
                  }
                  this.$http
                    .post(apiEp.register, {}, {params:{
                        userName: this.mobile,
                        smsCode: this.smsCode,
                        password: this.passwordOne
                    }})
                    .then(res => {
                      if (res.data.code == "0001") {
                         return this.$Notice.error({
                            desc: res.data.message || "请求失败",
                         });
                      }
                      if (res.data.code == "0000") {
                        this.$Notice.success({
                            desc: res.data.message || "请求成功",
                         });
                        this.$store.commit('setMobile', this.mobile)
                        this.$store.commit('setPassWord', this.passwordOne)
                        this.$router.push({path:'/login'})
                      }
                    })
                    .catch(err => {
                      console.log(err);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "register.scss";
</style>