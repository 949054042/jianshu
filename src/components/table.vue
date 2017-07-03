
<template>
	<div class='tab'>
		<ul v-for='(item,n) in arr'>
			<Item :id='item.i' @exchange='fn' :name='item.nam' width='20%' height='97px' fun='true'>
				<img :src='item.url1' slot='img'/>
				<img :src='item.url2' slot='img2'/>
				<p slot='p' v-text='item.txt'>我的</p>
			</Item>
		</ul>
		<div class='qfd'></div>
	</div>
</template>
<script>
import Item from"./item"
	export default{
		components:{
		 Item
		},
		data:function(){
			return {
				arr:[
						{url1:require('../assets/icon/my.svg'),url2:require('../assets/icon/my_check.svg'),txt:'首页',i:1,nam:''},
						{url1:require('../assets/icon/my.svg'),url2:require('../assets/icon/my_check.svg'),txt:'发现',i:2,nam:'Discovery'},
						{url1:require('../assets/images/01_03.jpg'),url2:require('../assets/images/01_03.jpg'),txt:'',i:3,nam:'Add'},
						{url1:require('../assets/icon/my.svg'),url2:require('../assets/icon/my_check.svg'),txt:'消息',i:4,nam:'Message'},
						{url1:require('../assets/icon/my.svg'),url2:require('../assets/icon/my_check.svg'),txt:'我的',i:5,nam:'My'}
					],
				num:1
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
	.tab{width:100%;background:#ffffff;}
	.qfd{clear:both}
	ul{}
</style>