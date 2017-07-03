<template>
	<div class='item' @click='change' :style='{width:width,height:height}'>
		<span v-show='!bol'><slot name='img'></slot></span>
		<span v-show='bol'><slot name='img2'></slot></span>
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
	computed:{
		bol:function(){
		if(this.id==this.$parent.num)
		{
			return true
		}
		else{
			return false
		}
	}
	},
	methods:{
		change:function(){
			this.$router.push('/'+this.name+'?id='+this.id)
			this.$emit('exchange',this.id)
		}
	}
	}
</script>
<style>
	.item{text-align:center;float:left;width:20vw;}
	.item img{width:0.4rem;margin-top:0.1rem;}
	.item{font-size:0.2rem;font-family:'新宋体 常规';color:#969696;}
	.item p{margin:0;font-size:0.2rem;}
</style>
