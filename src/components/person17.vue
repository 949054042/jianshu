<template>
	<div class='model' v-show='ff' @click='fg'></div>
</template>
<script>
	export default{
		computed:{
			ff:function(){
				if(this.id!=this.$parent.num2)
				{
					return true
				}
				else
				{
					return false
				}
			}
		},
		props:["id"],
		methods:{
			fg:function(){
				this.$emit('num',!this.ff)
			}
		}
	}
</script>
<style>
	.model{width:100vw;height:100vh;background:black;opacity:0.2;position:absolute;left:0;top:0;}
</style>