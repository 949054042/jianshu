<template>
	<div class='person10'>
		<Item4  v-for='(item,n) in arr' height='1.72rem' width="25vw">
			<img :src='item.url' slot='img'/>
			<p slot='p' v-text='item.p'></p>
		</Item4>
		<div style='clear:both'></div>
	</div>
</template>
<script>
import Item4 from'./item4'
	export default{
		components:{
			Item4
		},
		data:function(){
			return {
				arr:[
					{url:require('../assets/images/wj.svg'),p:'文集'},
					{url:require('../assets/images/zt.svg'),p:'专题'},
					{url:require('../assets/images/gz5.svg'),p:'关注'},
					{url:require('../assets/images/fs3.svg'),p:'粉丝'}
				]
			}
		}
	}
</script>
<style>
</style>