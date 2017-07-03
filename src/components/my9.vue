<template>
		<div class='FG2'>
			<div class='first'>{{p}}</div>
			<span><img src='../assets/images/left.svg'/></span>
		</div>
</template>
<script>
	export default{
		props:['p']
	}
</script>
<style>
	.FG2{width:96vw;height:0.69rem;border-bottom:1px solid #b0b0b0;border-radius:0.05rem;position:relative;margin-left:4vw;}
	.FG2 .span{height:0.69rem;text-align:center; float:left;width:10vw;}
	.FG2 .span img{height:0.69rem;width:5vw;}
	.FG2 .first{font-size:0.3rem;color:#2f2f2f;text-align:left;line-height:0.69rem !important;}
	.FG2 span{position:absolute;right:5vw;top:0.16rem;font-size:0.24rem;color:#ea715c;line-height:0.3rem;}
	.FG2 span img{width:4vw;height:0.4rem;}
	.FG2 .sp{width:4vw;line-height:0.4rem;position:absolute;right:0.9rem;top:0.15rem;color:#d8d8d8;}
</style>