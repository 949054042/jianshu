<template>
	<div class='item2' :style='{width:width,height:height}'>
		<span><slot name='img'></slot></span>
		<slot name='p'></slot>
	</div>
</template>
<script>
	export default{
	data:function(){
		return{
		}
	},
	props:['width','height']
	}
</script>
<style>
	.item2{text-align:center;float:left;}
	.item2 img{width:30%;margin-top:0.45rem;width:0.5rem;height:0.5rem;}
	.item2{font-size:0.22rem;font-family:'新宋体 常规';color:#969696;}
	.item2 p{margin:0;}
</style>