<template>
	<div class='person1'>
		<div class='left'><img src='../assets/images/back.svg' @click='back'/></div>
		<div class='right'><img src='../assets/images/sc2.svg' @click='gb'/></div>
		<div style='clear:both'></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {change:1,flag5:true}
		},
		methods:{
			back:function(){
				this.$router.push({name:'My'})
			},
			gb:function(){
				if(this.change==1)
				{
					this.change=0
				}
				else
				{
					this.change=1
			}
				this.$emit('js',this.change)
			}
		}
	}
</script>
<style>
	.person1{border-bottom:1px solid #d5d5d5;}
	.person1 img{width:0.4rem;height:0.6rem;}
	.person1 .left{float:left;width:50vw;text-align:left;}
	.person1 .left img{margin-left:4vw;}
	.person1 .right{float:left;width:50vw;text-align:right;}
	.person1 .right img{margin-right:4vw;}
</style>