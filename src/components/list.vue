<template>
	<div class='list'>
		<ul :style="{height:height+'rem'}" >
			<li style='margin-top:0.28rem;' id='li'>全部关注</li>
			<li>只看专集</li>
			<li>只看文集</li>
			<li>只看用户</li>
			<li>只看推送更新</li>
		</ul>
	</div>
</template>
<script>
import '../assets/lib/jquery-1.11.3.min.js';
	export default{
	props:['height'],
	data:function(){
		return {flag:true}
	},
		methods:{
			call:function(){
				
			}
		}
	}
</script>
<style>
	.list{width:32vw;background:#fff;position:absolute;left:32vw;top:0.6rem;margin-top:0.16rem;z-index:10}
	.list ul{width:100%;position:relative;transition:all .5s ease-in;overflow:hidden;}
	.list ul::before{content:'';width:5vw;height:0.2rem;position:absolute;left:0.95rem;top:-0.45rem;background-image:url(../assets/images/wys_03.jpg);background-size:100%}
	.list ul li{width:100%;height:0.72rem;text-align:center;font-size:0.3rem;font-family:'宋体 常规';list-style:none;}
</style>