<template>
	<div class='aa' @touchmove='long($event)'>
		<Banner></Banner>
		<SS :js='e'></SS>
		<div style='position:relative;overflow:hidden;height:0.64rem;margin-top:0.32rem'>
			<BQ :n='item.n' :m='item.m' :color='item.col' v-for='(item,z) in arr'></BQ>
			<div style='clear:both;'></div>
		</div>
		<HD @bsz='fn' t1='热门专题' :flag='true'></HD>
		<BQ_B_C :num='jh'></BQ_B_C>
		<HD @bsz='fn' t1='热门文章' :flag='false' style='margin-bottom:0.3rem;'></HD>
		<User v-for='(item,n) in brr' :url='item.url' :t_1='item.t_1' :time='item.time' :t2='item.t2' :url2='item.url2' :flag2='item.flag2'></User>
		<div style='clear:both;margin-bottom:0.5rem;'></div>
	</div>
</template>
<script>
import Banner from'../../components/banner'
import SS from'../../components/sousuo'
import BQ from'../../components/biaoqian'
import HD from'../../components/header'
import BQ_B_C from'../../components/bq_bar_contain'
import User from'../../components/user'
	export default{
		components:{
			Banner,
			SS,
			BQ,
			HD,
			BQ_B_C,
			User
		},
		mounted:function(){
		},
		data:function(){
			return {
				arr:[
					{m:4,n:0,col:'#6eb2cc'},
					{m:33,n:0,col:'orange'},
					{m:62,n:0,col:'#f69581'},
					{m:91,n:0,col:'#d8b474'},
					{m:120,n:0,col:'#6ecaf8'},
					{m:149,n:0,col:'#50cf8e'},
					{m:178,n:0,col:'#c79efe'},
				],
				jh:0,
				e:0,
				brr:[
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_03.jpg'),flag2:false},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_07.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_10.jpg'),flag2:false},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_03.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_07.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_03.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_07.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_03.jpg'),flag2:true},
					{url:require('../../assets/images/user_03.jpg'),t_1:'随意',time:'06.23 11:39',t2:'日思Vol.43:污是一种生产力',url2:require('../../assets/images/photo_07.jpg'),flag2:true},
				]
			}
		},
		methods:{
			fn:function(n){
				this.jh=n
			},
			long:function(e){
				this.e=document.body.scrollTop
				
			}
		}
	}
</script>
<style>
	.aa{position:relative;}
</style>