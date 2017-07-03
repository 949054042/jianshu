<template>
	<div class='GZ2'>
		<div style='width:100vw;height:32px;background:#fcfcfc;border-top:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;'></div>
		<div class='middle'>庄13台妹PKGIRL关注了用户</div>
		<div class='bottom'>
			<div class='left'>
			<img src='../assets/images/gz2_14.jpg'/>
		</div>
		<div class='rightt'>
			<div class='arc'>
				<h3>签约作者文章集合</h3>
				<p class='tj'>4455篇文章 3888人关注</p>
				<p class='sm'>收录简书签约作者文章请勿随意转载</p>
			</div>
		</div>
		<button type='button' @click='gg' :style="{backgroundImage:'url('+url2+')'}">{{txt}}</button>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				flag:true,
				txt:'关注'
			}
		},
		computed:{
			url2:function(){
				if(this.flag)
				{
					return  require('../assets/images/jia2.svg')
				}
				else
				{
					return require('../assets/images/check.svg')
				}
			}
		},
		methods:{
			gg:function(){
				this.flag=!this.flag
				console.log(this.url2)
				this.txt=this.flag?'关注':'已关注'
			}
		}
	}
</script>
<style>
	.GZ2{width:100vw;height:33vw;}
	.GZ2 h3{margin-top:0.32rem;}
	.GZ2 img{width:0.8rem;margin-top:0.24rem;}
	.GZ2 .bottom{height:1.48rem;text-align:left;position:relative;margin-top:0.16rem;}
	.GZ2 .left{width:18vw;height:1.48rem;float:left;}
	.GZ2 .left img{margin-left:4vw;}
	.GZ2 .rightt{width:82vw;height:1.48rem;float:left;font-size:0.2rem;}
	.GZ2 button{position:absolute;right:4vw;top:0.32rem;height:0.48rem;width:21vw;background-repeat:no-repeat;background-size:25%;
	background-color:#49be38;border-radius:5px;font-size:0.2rem;border:none;width:1.6rem;}
	.GZ2 .middle{height:0.62rem;font-size:0.26rem;font-family:'微软 雅黑';color:#3194d0;line-height:0.62rem;border-bottom:0.01rem solid #d5d5d5;text-align:left;padding-left:4vw;}
	
</style>