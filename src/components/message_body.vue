<template>
	<div class='add_2_body' style='padding-top:0.3rem;border-bottom:0.02rem solid #eee;'>
		<ul v-for='(item,n) in arr'>
			<Item2 width='32%' height='1.2rem' fun='false'>
				<img :src='item.url1' slot='img'/>
				<p slot='p' style='margin-bottom:0.3rem;'>hehe</p>
			</Item2>
		</ul>
		<div style='clear:both;'></div>
	</div>
</template>
<script>
	import Item2 from'./item2'
	export default{
		data:function(){
			return{
				arr:[
						{url1:require('../assets/images/pl.svg'),txt:'首页',i:1,nam:''},
						{url1:require('../assets/images/love.svg'),txt:'发现',i:2,nam:'Discovery'},
						{url1:require('../assets/images/gz.svg'),txt:'',i:3,nam:'Add'},
						{url1:require('../assets/images/tgao.svg'),txt:'消息',i:4,nam:'Message'},
						{url1:require('../assets/images/shang.svg'),txt:'我的',i:5,nam:'My'}
					],
			}
		},
		components:{
			Item2
		}
	}
</script>
<style>
</sytle>