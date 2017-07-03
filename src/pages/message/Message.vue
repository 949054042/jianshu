<template>
	<div class='home'>
		<Ad_2_c></Ad_2_c>
		<Msd></Msd>
		<div class='ht'></div>
		<JS></JS>
		<JSB></JSB>
	</div>
</template>
<script>
	import Ad_2_c from'../../components/add_2_contain'
	import Msd from'../../components/message_body'
	import JS from'../../components/jianshu'
	import JSB from'../../components/jians_body'
	export default{
		components:{
			Ad_2_c,
			Msd,
			JS,
			JSB
		}
	}
</script>
<style>
	.ht{width:100vw;height:30px;background:#fcfcfc;border-bottom:1px solid #d5d5d5;}
</style>