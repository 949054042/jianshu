<template>
	<div class='person4' :class='{dc:flag}' @click='hd'>
		<div class='tabb'>{{p}}</div>
		<div style='clear:both'></div>
	</div>
</template>
<script>
	export default{
		props:['p','id'],
		computed:{
			flag:function(){
				if(this.id==this.$parent.num)
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
			hd:function(){
				this.$router.push('/Person'+'/person'+this.id)
				this.$emit('gdd',this.id)
			}
		}
	}
</script>
<style>
	.person4{width:32vw;font-size:0.3rem;text-align:center;color:#999999;line-height:0.64rem;float:left;}
	.dc{color:#ea745f;}
</style>