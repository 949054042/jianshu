<template>
	<div class='My'>
		<div class='left'>
			<img src='../assets/images/my_03.jpg'/>
		</div>
		<div class='rightt'>
			<div class='top'>我是强强</div>
			<div class='bottom'>
				<span>积分40</span><span>积分商城</span>
			</div>
		</div>
		<span class='next'><img src='../assets/images/left.svg' @click='jump_2'/></span>
	</div>
</template>
<script>
	export default{
	methods:{
		jump_2:function(){
			this.$router.push('/Person?id=10')
		}
	}
	}
</script>
<style>
	.My{width:100vw;height:1.52rem;border-bottom:1px solid #d5d5d5;}
	.My .left{height:1.44rem;float:left;width:24vw;}
	.My .left img{width:1.12rem;height:1.12rem;margin-left:5vw;}
	.My .rightt{height:1.44rem;float:left;width:76vw;position:relative}
	.My .rightt .top{height:0.64rem;font-size:0.34rem;text-align:left;line-height:0.64rem;}
	.My .rightt .bottom{height:0.9rem;font-size:0.2rem;text-align:left;padding-left:4vw;}
	.My .rightt .bottom span{width:17vw;height:0.32rem;border:1px solid #e28371;margin-right:3vw;border-radius:5px;}
	.My .next{position:absolute;right:0.28rem;top:-0.35rem;width:0.4rem;height:0.3rem;}
	.My .next img{width:0.4rem;height:0.3rem;}
</style>