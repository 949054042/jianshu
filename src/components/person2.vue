<template>
	<div class='person2'>
		<div class='middle'>
			<div class='top'>
				<img src='../assets/images/my_03.jpg'/>
			</div>
			<div class='middle2'>
				<h3>我是强强</h3>
				<p>写了0个字,获得0个喜欢</p>
			</div>
			<div class='bottom'>
				<div class='download'></div>
				<div class='bj'>编辑个人资料</div>
			</div>
			<div class='db' style='border-bottom:1px solid #d5d5d5;height:0.62rem;'></div>
		</div>
	</div>
</template>
<script>
	export default{
		created:function(){
			console.log(12)
		},
		components:{
		}
	}
</script>
<style>
	.person2{width:100vw;position:relative;}
	.person2 .top{height:1.3rem;width:100vw;}
	.person2 img{height:1.44rem;width:1.44rem;position:absolute;left:40vw;top:-0.7rem;}
	.person2 .middle2{height:1.44rem;width:100vw;text-align:center;font-family:'宋体 常规'}
	.person2 .middle2 h3{font-size:0.4rem;margin-bottom:0.44rem;color:#2f2f2f;}
	.person2 .middle2 p{font-size:0.25rem;color:#8c8c8c;}
	.person2 .bottom {height:0.44rem;width:2.23rem;margin-left:2.65rem;font-size:0.25rem;color:#8c8c8c;border:1px solid #35b123;padding-top:0.16rem;border-radius:0.06rem;color:#35b123;}
</style>