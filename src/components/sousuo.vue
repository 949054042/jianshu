<template>
	<div class='sousuo' :class='{tr:ttr}'>
		<input type='text' class='sousuo1' placeholder='搜索' @click='del' v-model='nr'>
	</div>
</template>
<script>
	export default{
	props:['js'],
	data:function(){
		return {nr:'',bol:true}
	},
	computed:{
		ttr:function(){
		console.log(this.js)
			if(this.js>180)
			{
				return true
			}
			else
			{
				return false
			}
		}
	},
		methods:{
			del:function(){
				this.nr=''
			}
		}
	}
</script>
<style>
	.sousuo{width:22vw;position:fixed;right:0;top:0;background:#fcfcfc;z-index:100;border-radius:0.2rem;margin-top:0.1rem;transition:all .3s ease;}
	.tr{width:100vw;margin-top:0px}
	.sousuo1{width:100%;height:0.4rem;border-radius:0.2rem;background-image:url(../assets/images/sousuo.svg);background-repeat:no-repeat;background-size:3vw;background-position:0.05rem 0.1rem;text-align:center;font-size:0.25rem;position:absolute;right:0.1rem}
</style>