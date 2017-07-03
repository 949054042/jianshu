<template>
	<div class='Header'>
		<span class='gz2'><img src='../assets/images/gz2.svg' @click='turn'/></span>
		<span class='gzhu'>
			<div class='p tz'>
				全部关注
			</div>
			<div class='tp tz'>
				<img src='../assets/images/sanjiao.svg'  :style='{transform:xz}' @click='rotate'/>
			</div>
			<div style='clear:both'></div>
		</span>
	</div>
</template>
<script>
	export default{
	data:function(){
		return{xz:'',i:0,flag:true,height:0}
	},
		methods:{
			rotate:function(){
			console.log(111)
			if(this.flag)
				{
					this.height=3.6;
					this.flag=!this.flag
				}
				else
				{
					this.height=0;
					this.flag=!this.flag
				}
				this.$emit('chan',this.height)
				++this.i
				if(this.i>2)
				{
					this.i=1
				}
				var m=this.i*(-180)
				console.log(20)
				this.xz='rotate('+m+'deg)'
			},
			turn:function(){
				this.$router.push('/GZ')
			}
		}
	}
</script>
<style>
	.Header{width:100vw;height:0.5rem;text-align:left;}
	.Header span{display:inline-block}
	.gz2{width:5vw;margin-right:31vw;position:relative;height:0.4rem;}
	.gz2 img{width:100%;height:0.4rem;position:absolute;left:5vw;top:-0.1rem;transition:all 1s ease;transform:rotate(0deg)}
	.gzhu{font-size:0.3rem;font-family:'宋体 常规';color:#494949;line-height:0.5rem;text-align:center;}
	.gzhu .tz{float:left;}
	.gzhu .p{width:18vw;text-align:center}
	.gzhu .tp{width:4vw;margin-top:0.1rem;}
	.gzhu img{width:100%}
</style>