<template>
	<div class='bq' :style="{left:m+'vw',top:n+'vw',backgroundColor:color}">
		<p>{{tit}}</p>
	</div>
</template>
<script>
	export default{
		props:['tit','m','n','color']
	}
</script>
<style>
	.bq{width:27%;height:0.64rem;border-radius:0.06rem;position:absolute;font-size:0.15rem;font-size:0.18rem;}
</style>