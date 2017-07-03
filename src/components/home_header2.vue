<template>
	<div class='Header2'>
		<span class='gz2'><img src='../assets/images/back.svg' @click='turn'/></span>
		<span class='gzhu'>
			<div class='p tz'>
				添加关注
			</div>
			<div style='clear:both'></div>
		</span>
	</div>
</template>
<script>
	export default{
	data:function(){
		return{xz:'',i:0,flag:true,height:0}
	},
		methods:{
			turn:function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.Header2{width:100vw;height:0.65rem;text-align:left;border-bottom:0.01rem solid #d5d5d5;}
	.Header2 span{display:inline-block}
	.Header2 .gz2{width:5vw;margin-right:31vw;position:relative;height:0.4rem;}
	.Header2 .gz2 img{width:100%;height:0.4rem;position:absolute;left:0;top:0.02rem;transition:all 1s ease;transform:rotate(0deg)}
	.Header2 .gzhu{font-size:0.3rem;font-family:'宋体 常规';color:#494949;line-height:0.5rem;text-align:center;}
	.Header2 .gzhu .tz{float:left;}
	.Header2 .gzhu .p{width:18vw;text-align:center}
	.Header2 .gzhu .tp{width:4vw;margin-top:0.1rem;}
	.Header2 .gzhu img{width:100%}
</style>