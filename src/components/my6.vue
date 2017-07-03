<template>
	<div>
		<div class='mm'>
			<MY5 v-for='(item,n) in arr' :url=item.url :p='item.p' :num='item.num'></MY5>
		</div>
	</div>
</template>
<script>
import MY5 from'./my5'
	export default{
		components:{
			MY5
		},
		data:function(){
			return {
				arr:[
					{url:require('../assets/images/sm.svg'),p:'私密文章',num:0},
					{url:require('../assets/images/sc.svg'),p:'私密文章',num:0},
					{url:require('../assets/images/wz.svg'),p:'私密文章',num:0},
					{url:require('../assets/images/zt.svg'),p:'私密文章',num:0},
					{url:require('../assets/images/wj.svg'),p:'私密文章',num:2},
					{url:require('../assets/images/check.svg'),p:'私密文章',num:0}
				]
			}
		}
	}
</script>
<style>
	.mm{width:100vw;}
</style>