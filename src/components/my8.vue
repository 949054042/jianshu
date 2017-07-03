<template>
		<div class='FG'>
			<div class='first span'>
				<img src='../assets/images/night.svg'/>
			</div>
			<div class='first'>夜间模式</div>
			<div class='circle' :style='{background:bc}'>
				<div class='inner' :style='{left:sl,background:bk}' @click='slide'></div>
			</div>
		</div>
</template>
<script>
	export default{
	data:function(){
		return {flag:true,bc:'#fff',bk:'#fff'}
	},
		props:['url','p','num'],
		methods:{
			slide:function(){
			console.log(100)
				var d=document.getElementsByTagName('body')[0]
				if(!this.flag)
				{
					d.style.backgroundColor='#fff'
					this.flag=!this.flag
					this.bc=''
				}
				else
				{
					d.style.backgroundColor='#646464'
					this.bc='green'
					this.bk='#fff'
					this.flag=!this.flag
				}
			}
		},
		computed:{
			sl:function(){
				if(this.flag)
				{
					return '0px'
				}
				else
				{
					return '0.5rem'
				}
			}
		}
	}
</script>
<style>
	.FG{width:96vw;height:0.69rem;border-bottom:0.01rem solid #b0b0b0;border-radius:0.05rem;position:relative;margin-left:4vw;}
	.FG .span{height:0.69rem;text-align:center; float:left;width:10vw;}
	.FG .span img{height:0.69rem;width:5vw;}
	.FG .first{font-size:0.3rem;color:#2f2f2f;text-align:left;line-height:0.69rem;}
	.FG span{position:absolute;right:5vw;top:0.16rem;font-size:0.24rem;color:#ea715c;line-height:0.3rem;}
	.FG span img{width:4vw;height:0.4rem;}
	.FG .circle{width:1rem;height:0.48rem;border:0.02rem solid black;border-radius:0.24rem;position:absolute;right:0.3rem;top:0.1rem;}
	.FG .inner{width:0.5rem;height:0.48rem;border-radius:50%;border:0.01rem solid #b1b1b1;position:absolute;left:0px;top:0px;transition:all 1s ease}
</style>