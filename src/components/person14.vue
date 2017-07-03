<template>
	<div class='send'  @click='get' :class='{db2:flag}'>
		<Person15 v-for='(item,n) in arr' :url='item.url' :p1='item.p' @tx2='get'></Person15>
		<div style='clear:both'></div>
		<div  class='fg'>
			取消
		</div>
	</div>
</template>
<script>
import Person15 from'./person15'
	export default{
		computed:{
			flag:function(){
				if(this.nn==this.$parent.num)
				{
						return true
				}
				else
				{
					return false
				}
			},
		},
		components:{
			Person15
		},
		data:function(){
			return {
					arr:[
						{url:require('../assets/images/i1.svg'),p:'简书好友'},
						{url:require('../assets/images/i2.svg'),p:'微信好友'},
						{url:require('../assets/images/i3.svg'),p:'微信朋友圈'},
						{url:require('../assets/images/i4.svg'),p:'新浪微博'},
						{url:require('../assets/images/i5.svg'),p:'qq好友'},
						{url:require('../assets/images/i6.svg'),p:'qq空间'},
						{url:require('../assets/images/i7.svg'),p:'Safari中打开'},
						{url:require('../assets/images/i8.svg'),p:'更多'},
						{url:require('../assets/images/i9.svg'),p:'简书好友'}
					],
					nn:0
			}
		},
		methods:{
				get:function(i){
					if(this.nn==0)
					{
						this.nn=1
					}
					else
					{
						this.nn=0
					}
				}
			}
	}
</script>
<style>	
.send{position:fixed;left:0px;bottom:-5.12rem;height:5.2rem;width:100vw;background:#fff;z-index:10;padding-left:0.36rem;padding-top:0.4rem;transition:all 1s ease}
.fg{width:92vw;height:1.05rem;text-align:center;font-size:0.35rem;color:#ea6f5a;font-family:'宋体 常规';border-top:0.01rem solid #d5d5d5;margin-left:2vw;margin-top:0.4rem;line-height:1.05rem;z-index:10;}
.db2{bottom:0rem}
</style>