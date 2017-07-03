<template>
		<div class='MY7'>
			<MY5 :url='arr[0].url' p='浏览历史'></MY5>
			<MY8></MY8>
		</div>
</template>
<script>
import MY5 from'./my5'
import MY8 from'./my8'
	export default{
	components:{MY5,MY8},
	data:function(){
			return {
				arr:[
					{url:require('../assets/images/sm.svg'),p:'私密文章',num:0},
				]
			}
		}
	}
</script>
<style></style>