<template>
	<div class='Hb'>
		<div class='lh fl'>
			<img :src='src'/>
		</div>
		<div class='rh fl'>
			<p>{{txt}}</p>
			<img src='../assets/images/left.svg'/>
		</div>
	</div>
</template>
<script>
	export default{
		props:['src','txt']
	}
</script>
<style>
	.Hb{width:100vw;height:1.2rem;}
	.Hb .fl{float:left;}
	.Hb .lh{width:20vw;height:1.2rem;}
	.Hb .lh img{margin-left:4vw;width:0.8rem;}
	.Hb .rh{width:80vw;border-bottom:0.02rem solid #eee;height:1.2rem;position:relative;}
	.Hb .rh p{font-size:0.35rem;font-family:'宋体 常规';text-align:left;width:50vw;line-height:0.8rem;margin-top:0.24rem;color:#2f2f2f}
	.Hb .rh img{position:absolute;right:0.4rem;top:0.5rem;width:0.5rem;}
</style>