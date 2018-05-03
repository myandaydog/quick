<template>
  <div id="loanParticulars">
    <div class="loanParticulars">
        <Row class='title'>
            <Col span='2' class='goback'><span @click='goback'>返回</span></Col>
            <Col span='22' class='particular'><span>借款人详情</span></Col>
        </Row>
        <fieldset class='health'>
           <legend>借款人</legend>
           <Row class='healtha'>
                <Col span='5' class='name'>姓名：<span>王**</span></Col>
                <Col span='9'>身份证号：<span>3203821989****3745</span></Col>
                <Col span='5'>手机号：<span>187****5628</span></Col>
                <Col span='5'>微信号：<span>187****5628</span></Col>
           </Row>
           <Row class='healthb'>
                <Col span='24'>购买后显示</Col>
           </Row>
        </fieldset>
        <fieldset class='basic'>
           <legend>基本信息</legend>
           <Row>
                <Col span='12' class='basica'>
                    <p>借款时间：<span>2018-3-14</span></p>
                    <p>芝麻分：<span>3000</span></p>
                    <p>年龄：<span>32岁</span></p>
                </Col>
                <Col span='12' class='basicb'>
                    <p>借款金额：<span>750</span></p>
                    <p>借款用途：<span>消费</span></p>
                </Col>
           </Row>
        </fieldset>
        <fieldset class='credit'>
           <legend>信用报告</legend>
           <Row>
                <Col span='24' class='credita'>
                    <p>真实姓名：&emsp;&emsp;<span>王**</span></p>
                    <p>身份证号：&emsp;&emsp;<span>3203821989****3745</span></p>
                    <p>年龄：&emsp;&emsp;&emsp;&emsp;<span>32岁</span></p>
                </Col>
           </Row>
           <Row>
                <Col span='24' class='creditb'>
                    <p>设备型号：&emsp;&emsp;<span>安卓</span></p>
                    <p>现居住地：&emsp;&emsp;<span>江苏-南京</span></p>
                    <p>身份证归属地：<span>江苏-南京</span></p>
                </Col>
           </Row>
        </fieldset>
    </div>
  </div>
</template>
<script>
import apiEp from './../../api/api';
    export default {
        // name: '借款人详情',
        data () {
            return {
               
            }
        },
        methods:{
          goback(){
            this.$router.back(-1)
          }
         
        }
    }
</script>

<style lang="scss" scoped>
@import "loanParticulars.scss";
</style>
