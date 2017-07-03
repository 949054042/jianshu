<template>
	<div class='xq'>
		<h4>{{num1}}</h4>
		<p>{{p1}}</p>
	</div>
</template>
<script>
	export default{
		props:['p1','num1']
	}
</script>
<style>
	.xq{width:33vw;height:1.05rem;text-align:center;float:left;}
	.xq h4{font-size:0.4rem;color:#303030;}
	.xq p{font-size:0.25rem;color:#aeaeae;}
</style>