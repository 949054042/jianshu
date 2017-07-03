<template>
	<div class='header'>
		<div class='p'>
			<p>{{t1}}</p>
		</div>
		<div class='change' v-show='flag'>
			<img src='../assets/images/change_2.gif' v-show='!bol'/>
			<img src='../assets/images/change.svg' @click='ZH' v-show='bol'/>
			<p>换一批</p>
		</div>
		<div style='clear:both;'></div>
	</div>
</template>
<script>
	export default{
	props:['t1','flag'],
	data:function(){
		return{
			bol:true,
			bg:0
		}
	},
		methods:{
			ZH:function(){
				do{
				var n=parseInt(Math.random()*4)
				}while(this.bg==n)
				console.log(this.bg)
					this.bg=n
					this.bol=!this.bol
					var that=this
					setTimeout(function(){
						that.bol=!that.bol
						that.$emit('bsz',that.bg)
					},1000)
			}
		}
	}
</script>
<style>
	.header{margin-top:0.24rem;color:#a0a0a0;height:0.3rem;}
	.header .p{float:left;margin-left:3vw;border-left:0.02rem solid #e69081;height:0.27rem;padding-left:0.08rem;}
	.header .change{float:right;margin-right:3vw;}
	.header .p p{font-size:0.22rem;font-family:'微软 雅黑';}
	.header .change p{font-size:0.22rem;font-family:'微软 雅黑;display:inline-block';float:left;}
	.header .change img{width:4vw;float:left;margin-right:0.04rem;}
</style>