<template>
		<div class='FG'>
			<div class='first span'>
				<img :src='url'/>
			</div>
			<div class='first'>{{p}}</div>
			<span><img src='../assets/images/left.svg'/></span>
			<span class='sp'>{{num}}</span>
		</div>
</template>
<script>
	export default{
		props:['url','p','num']
	}
</script>
<style>
	.FG{width:96vw;height:0.69rem;border-bottom:1px solid #b0b0b0;border-radius:0.05rem;position:relative;margin-left:4vw;border-bottom:2px solid #d5d5d5;}
	.FG .span{height:0.69rem;text-align:center; float:left;width:10vw;}
	.FG .span img{height:0.69rem;width:5vw;}
	.FG .first{font-size:0.3rem;color:#2f2f2f;text-align:left;line-height:0.69rem }
	.FG span{position:absolute;right:5vw;top:0.16rem;font-size:0.24rem;color:#ea715c;line-height:0.3rem;}
	.FG span img{width:4vw;height:0.4rem;}
	.FG .sp{width:4vw;line-height:0.4rem;position:absolute;right:0.9rem;top:0.15rem;color:#d8d8d8;}
</style>