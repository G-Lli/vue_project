
<template>
    <div>
        <img class="header_img" src="https://img10.360buyimg.com/img/jfs/t1/117726/20/7368/88789/5ec3777cE70ffaf64/47d8f5d0310958bd.gif" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        >
        </cube-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                model:{
                    username:'',
                    password:''
                },
                schema: {
                    fields:[
                        {
                            type:'input',
                            modelKey:'username',
                            label:'用户名',
                            props:{
                                placeholder:'请输入用户名',
                            },
                            rules:{
                                //校验规则
                                required:true,
                                type: 'string',
                                min:3,
                                max:15,
                            },
                            trigger:'blur',
                            messages:{
                                required:'用户名不能为空',
                                min:'用户名不能少于三个字符',
                                max:'用户名不能多于十五个字符'
                            }
                        },
                        {
                            type:'input',
                            modelKey:'password',
                            label:'密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{
                                    open:false,
                                }
                            },
                            rule:{
                                required:true,
                            },
                            trigger: 'blur',
                        },
                        {
                            type:'submit',
                            label:'注册'
                        }
                    ]
                }
            }
        },
        methods:{
            submitHandler(e){
                e.preventDefault()
                this.$http.get('/api/register',{params:this.model}).then(res=>{
                    console.log(res.success)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header_img{
        height: 100px;
        width: 100%;
    }


</style>