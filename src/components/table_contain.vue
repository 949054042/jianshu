<template>
	<div class='tab_con'>
		<Tab></Tab>
	</div>
</template>
<script>
	import Tab from'./table'
	export default{
		components:{
				Tab
		}
	}
</script>
<style>
	.tab_con{width:100%;border-top:2px solid #d5d5d5;position:fixed;left:0;bottom:0;z-index:10;box-sizing:content-box;height:0.97rem;}
</style>