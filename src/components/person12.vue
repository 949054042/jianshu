<template>
	<div class='person11'>
		<Item7 v-for='(item,n) in arr' :url='item.url' :p='item.p'></Item7>
		<div style='clear:both'></div>
	</div>
</template>
<script>
import Item7 from'./item7'
	export default{
		components:{
			 Item7
		},
		data:function(){
			return {
				arr:[
					{url:require('../assets/images/love2.svg'),p:'喜欢的文章'},
					{url:require('../assets/images/check.svg'),p:'关注的专题/文集'}
				]
			}
		}
	}
</script>
<style>
	.person11{border-bottom:1px solid #c7c7cc;border-top:1px solid #c7c7cc;}
</style>