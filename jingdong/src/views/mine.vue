<template>
    <div>
        <img class="header_img" src="https://img10.360buyimg.com/img/jfs/t1/117726/20/7368/88789/5ec3777cE70ffaf64/47d8f5d0310958bd.gif" alt="">
        <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                minearry:[
                    {label:'商品收藏'},
                    {label:'我的足迹'},
                    {label:'我的订单'},
                    {label:'店铺收藏'},
                    {label:'退出',type:'exit'}
                ]
            }
        },
        methods:{
            itemclick(item){
                if (item.type=='exit'){
                    this.$store.commit('settoken','')
                    localStorage.removeItem('token')
                    this.$router.push({path:'/'})
                }
            }
        }
    }
</script>

<style scoped>
    .mineitem{
        font-size: 15px;
        text-align: left;
        height: 50px;
        line-height: 50%;
        padding-left: 5%;
        border-bottom: 1px solid #eeeeee;
    }
    .mineitem .minetitle{
        padding:10px;
        display: inline-block;
        width: 90%;
    }
    .header_img{
        height: 100px;
        width: 100%;
    }
</style>