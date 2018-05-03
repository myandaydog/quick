<template>
  <div id="grabSingle">
    <div class="top">
        <Row type="flex" >
          <Col span='7'>
              <div class="sesame">
                  <span>芝麻分</span>
                  <Input v-model="minSesame" placeholder="最小350" style="width: 87px"></Input> — 
                  <Input v-model="maxSesame" placeholder="最大900" style="width: 87px"></Input>
              </div>
              <div class="statu">
                  <span>查看状态</span>
                  <Select v-model="statu" style="width:120px">
                    <Option v-for="item in status" :value="item.code" :key="item.code">{{ item.txt }}</Option>
                  </Select>
              </div>
              <div class="nation">
                  <span>民族</span>
                  <Select v-model="statu" style="width:120px">
                    <Option v-for="item in nations" :value="item.code" :key="item.code">{{ item.txt }}</Option>
                  </Select>
              </div>
          </Col>
          <Col span='10'>
              <div class="loanMoney">
                  <span>借款金额</span>
                  <Input v-model="minLoan" placeholder="最小350" style="width: 64px"></Input> — 
                  <Input v-model="maxLoan" placeholder="最大900" style="width: 64px"></Input>
              </div>
              <div class="deviceType">
                  <span>设备类型</span>
                  <Select v-model="deviceType" style="width:120px">
                    <Option v-for="item in deviceTypes" :value="item.code" :key="item.code">{{ item.txt }}</Option>
                  </Select>
              </div>
              <div class="address">
                  <span>城市</span>
                  <Select v-model="indexs" style="width:130px" @on-change="setOption(indexs)">
                    <Option v-for="(item, index) in address" :value="index"  :key="index">{{ item.name }}</Option>
                  </Select>
                  <Select v-model="city" multiple style="width:130px">
                    <Option v-for="(item, index) in citySelect" :value="item.name" :key="index" >{{ item.name }}</Option>
                  </Select>
              </div>
          </Col>
          <Col span='7'>
              <div class="age">
                  <span>年龄</span>
                  <Input v-model="minAge" placeholder="最小0" style="width: 64px"></Input> — 
                  <Input v-model="maxAge" placeholder="最大120" style="width: 64px"></Input>
              </div>
              <div class="sex">
                  <span>性别</span>
                  <Select v-model="sex" style="width:90px">
                    <Option v-for="item in sexs" :value="item.code" :key="item.code">{{ item.txt }}</Option>
                  </Select>
              </div>
          </Col>
        </Row>
        <Row>
            <Col span='16'>
                <div class="time">
                  <span>申请时间</span>
                  <DatePicker type="datetime" v-model="startTime"  format="yyyy-MM-dd HH:mm" placeholder="Select date and time" style="width: 150px;margin-right:10px;"></DatePicker> 至 
                  <DatePicker type="datetime" v-model="endTime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time" style="width: 150px;margin-left:10px;"></DatePicker>
              </div>
            </Col>
            <Col span='8'>
              <div class="btn">
                <Button type="ghost" @click='reset' style="width: 90px;margin-right:20px;">重置</Button>
                <Button type="primary" @click='query' style="width: 90px">查询</Button>
              </div>
            </Col>
        </Row>
    </div>
    <div class="bottom">
        <Row type="flex" class="title">
          <Col span='3'>姓名</Col>
          <Col span='3'>芝麻分</Col>
          <Col span='3'>借款金额</Col>
          <Col span='3'>所属城市</Col>
          <Col span='3'>申请时间</Col>
          <Col span='3'>点券金额</Col>
          <Col span='3'></Col>
        </Row>
        <Row type="flex" class="message">
          <Col span='3'>徐先生</Col>
          <Col span='3'>750</Col>
          <Col span='3'>5000</Col>
          <Col span='3'>江苏南京</Col>
          <Col span='3'>4/1 12:00</Col>
          <Col span='3'>15点卷</Col>
          <Col span='3'>
            <span @click='look' style="cursor: pointer;color:#5168EC;">查看详情</span>
          </Col>
        </Row>
        <Row type="flex" class="page">
          <Col span='6' class="page-left">
            <span>共1111条</span>
            <Select v-model="pagination" style="width:90px">
              <Option v-for="item in paginations" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </Col>
          <Col span='18' class="page-right">
              <Page :total="totalCount" :current="pageNum" :page-size="pageSize" @on-change="changepage"></Page>
          </Col>
        </Row>
    </div>
  </div>
</template>
<script>
import address from "./../../utils/address.json";
import apiEp from './../../api/api';
    export default {
        // name: '抢单',
        data () {
            return {
               minSesame: '',
               maxSesame: '',
               statu:'',
               status:[{txt: "已查看",code: 0},{txt: "未查看",code: 1}],
               nations:[{txt: "汉族",code: 0},{txt: "回族",code: 1}],
               minLoan: '',
               maxLoan: '',
               deviceTypes: [{ txt: "安卓", code: 0 },{ txt: "苹果", code: 1 },{ txt: "其他", code: 2} ],
               deviceType: '',
               address:address,
               provinces: [{txt: "江苏",code: 0},{txt: "浙江",code: 1}],
               citys: [{txt: "南京",code: 0},{txt: "苏州",code: 1},{txt: "杭州",code: 2},{txt: "舟山",code: 3}],
               citySelect: [],
               province: '',
               city: [],
               indexs: [],
               minAge: '',
               maxAge: '',
               sexs: [{ txt: "男", code: 1 },{ txt: "女", code: 2 } ],
               sex: '',
               startTime: '',
               endTime: '',
               totalCount: 100,
               pageNum: 7,
               pageSize: 10,
               paginations:['10条/每页', '20条/每页'],
               pagination: ''
           }
        },
        methods:{
          reset() {
            this.$Notice.success({
                desc: '重置',
            })
          },
          changepage(){
            this.$Notice.success({
                desc: '分页',
            })
          },
          query(){
            this.$Notice.success({
                desc: '查询',
            })
            console.log(this.city)
          },
          setOption(indexs) {
            // let that = this
            console.log(this.indexs)
            // this.indexs.forEach(function(v,k){
            //   console.log(v)
            //   console.log(that.address[v].children)
            //   console.log(that.address[v].name)
            //   // that.citySelect.push(that.address[v].children)
            //   // that.province.push(that.address[v].name)
            // })
            // console.log(this.citySelect)
            this.citySelect = this.address[indexs].children
            this.province = this.address[indexs].name
            console.log(this.citySelect, this.province)
          },
          look(){
            console.log('hahah')
            this.$router.push({path: 'loanParticulars'})

          }
         
        }
    }
</script>

<style lang="scss" scoped>
@import "grabSingle.scss";
</style>
