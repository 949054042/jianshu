<template>
		<div class='tb' @click='tx'>
			<img :src='url'/>
			<p>{{p1}}</p>
		</div>
</template>
<script>
	export default{
		props:['url','p1'],
		components:{
		},
		methods:{
			tx:function(){
			}
		},
		data:function(){
			return {
			
			}
		}
	}
</script>
<style>
	.tb{width:1.2rem;height:1.2rem;border:1px solid #dcdcdc;text-align:center;border-radius:0.25rem;float:left;display:inline-block;margin-right:0.2rem;margin-bottom:0.44rem;}
	.tb img{width:0.65rem;height:0.55rem;}
	.tb p{font-size:0.22rem;color:#757575;font-family:'宋体常规';line-height:0.22rem;}
</style>
