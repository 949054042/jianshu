<template>
		<div class='tb'>
			<img :src='url'/>
			<p>{{p1}}</p>
		</div>
</template>
<script>
import Person15 from'./person15'
	export default{
		components:{
		}
	}
</script>
<style>
	.tb{width:1.2rem;height:1.2rem;border:1px solid #dcdcdc;text-align:center;border-radius:0.25rem;float:left;display:inline-block;margin-right:0.2rem;margin-bottom:0.44rem;}
	.tb img{width:0.65rem;height:0.55rem;}
	.tb p{font-size:0.22rem;color:#757575;font-family:'宋体常规';line-height:0.22rem;}
</style>
data:function(){
	return {
		arr:[
			{url:require('../assets/images/i1.svg'),p:'简书好友'},
			{url:require('../assets/images/i2.svg'),p:'微信好友'},
			{url:require('../assets/images/i3.svg'),p:'微信朋友圈'},
			{url:require('../assets/images/i4.svg'),p:'新浪微博'},
			{url:require('../assets/images/i5.svg'),p:'qq好友'},
			{url:require('../assets/images/i6.svg'),p:'qq空间'},
			{url:require('../assets/images/i7.svg'),p:'Safari中打开'},
			{url:require('../assets/images/i8.svg'),p:'更多'},
			{url:require('../assets/images/i9.svg'),p:'简书好友'}
		]
	}
}
