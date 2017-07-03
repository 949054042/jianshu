<template>
	<div class='mine'>
		<MHD></MHD>
		<MY2></MY2>
		<div style='height:1.2rem;border-bottom:1px solid #d5d5d5;'>
			<MY4></MY4>
		</div>
		<MY6></MY6>
		<div style='height:0.32rem;border-bottom:1px solid #d5d5d5;'></div>
		<MY7></MY7>
		<div style='height:0.32rem;border-bottom:1px solid #d5d5d5;'></div>
		<MY10></MY10>
	</div>
</template>
<script>
import MHD from'../../components/myHeader'
import MY2 from'../../components/my2'
import MY4 from'../../components/my4'
import MY6 from'../../components/my6'
import MY7 from'../../components/my7'
import MY10 from'../../components/my10'
	export default{
		components:{
		 MHD,
		 MY2,
		 MY4,
		 MY6,
		 MY7,
		 MY10
		}
	}
</script>
<style>
	.mine{width:100vw;}
	.hdx{}
</style>