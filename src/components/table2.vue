
<template>
	<div class='tab2'>
			<Item3 :id='item.i' @exchange='fn' :name='item.nam' width='20%' height='97px' fun='true' v-for='(item,n) in arr'>
				<img :src='item.url1' slot='img'/>
				<img :src='item.url2' slot='img2'/>
				<p slot='p' v-text='item.txt'>我的</p>
			</Item3>
		<div class='qfd'></div>
	</div>
</template>
<script>
import Item3 from"./item3"
	export default{
		components:{
		 Item3
		},
		data:function(){
			return {
				arr:[
						{url1:require('../assets/images/qge_08.jpg'),txt:'推荐作者',i:1},
						{url1:require('../assets/images/qge_08.jpg'),txt:'推荐专题',i:2,nam:'Discovery'},
						{url1:require('../assets/images/wx.svg'),txt:'添加微信好友',i:3,nam:'Add'},
						{url1:require('../assets/images/qge_03.jpg'),txt:'添加qq好友',i:4,nam:'Message'},
					]
			}
		},
		methods:{
		fn:function(i){
			this.num=i
		}
	}
	}
</script>
<style>
	.tab2{width:100%;background:#ffffff;}
	.qfd{clear:both}
</style>