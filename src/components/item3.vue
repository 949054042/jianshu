<template>
	<div id='item3' @click='change'>
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
	props:['id','name','width','height','fun'],
	methods:{
		change:function(){
		}
	}
	}
</script>
<style>
	#item3{text-align:center;float:left;width:25vw;height:1.05rem;}
	#item3 img{width:6vw;margin-top:0.1rem;}
	#item3{font-size:0.22rem;font-family:'新宋体 常规';color:#969696;}
	#item3 p{margin:0;font-size:0.2rem;}
</style>
