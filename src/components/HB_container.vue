<template>
	<div class='HB_C'>
		<HB v-for='(item,n) in arr' :src='item.url' :txt='item.txt'></HB>
	</div>
</template>
<script>
import	HB from'./Home_tab'
	export default{
		components:{
			HB
		},
		data:function(){
			return {
				arr:[
					{url:require('../assets/images/tx_03.jpg'),txt:'简友圈'},
					{url:require('../assets/images/tx_06.jpg'),txt:'庄13台妹PKGIRL'}
				]
			}
		}
	}
</script>