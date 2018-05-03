<template>
    <div class="layout">
        <Menu mode="horizontal" style="background:#1f45e9">
            <div class="layout-logo"></div>
            <div class="layout-nav" >
                <Menu-item v-for="(item, index) in menuList"
                    :name="item['namePath']"
                    :key="index"
                    ref="mainMenu"
                    :class="activeIndex == index ? 'active' : '' ">
                    <!-- <router-link :to="item['namePath']"> -->
                     <span class="layout-text" @click="tab1(index)" v-cloak>{{item.value}}</span>
                    <!-- </router-link> -->
                </Menu-item>
            </div>
            <div class="layout-user">
                <span>iPhone X 您好</span> | <span>退出</span>
            </div>
        </Menu>
        <div class="layout-content">
            <Row type="flex">
                <i-col span="3">
                    <div class="left-nav">
                        <Menu width="auto">
                            <Menu-item v-for="(item, index) in menuChildList"
                                :name="item['namePath']" 
                                :key="index"
                                :class="activeIndexs == index ? 'active' : '' ">
                               <!-- <router-link :to="item['namePath']"> -->
                                  <span class="layout-text" v-cloak @click="tab2(index)" >{{item.value}}</span>
                                <!-- </router-link> -->
                            </Menu-item>
                        </Menu>
                    </div>
                </i-col>
                <i-col span="21">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
</template>
<script>
import {getPath} from '@/utils/utils.js'
    export default {
        data () {
            return {
                menuList: [],
                menuChildList: [],
                choose: '',
                activeIndex: 0,
                activeIndexs: 0,
                path:'',
            }
        },
        created(){
            this.menuList = JSON.parse(this.$store.getters.menuList)
            this.initMenu(0)
            this.path = getPath(this.$route.path)
            console.log(this.path)
            console.log(this.activeIndexs)
            for(let i = 0;i < this.menuList.length;i++){
              for(let j = 0;j < this.menuList[i].children.length;j++){
                if( this.path == this.menuList[i].children[j].namePath){
                  this.activeIndex = i
                  this.activeIndexs = j
                  console.log(i,j)
                  break
                }
              }
            }
            this.initMenu(this.activeIndex)
            console.log(this.activeIndex, this.activeIndexs)

        },
        methods:{
            initMenu (index) {
                this.menuChildList = this.menuList[index].children
            },
            tab1(index) {
                this.initMenu (index)
                this.activeIndex = index
                this.activeIndexs = 0
                // console.log('/menu/' + this.menuList[index].children[0].namePath)
                this.$router.push({path: this.menuList[index].children[0].namePath})
            },
            tab2(index) {
                this.activeIndexs = index
                this.$router.push({path: this.menuChildList[index].namePath})
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import "menu.scss";
</style>
