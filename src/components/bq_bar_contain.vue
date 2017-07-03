<template>
	<div class='bq_b_c'>
		<BQ_B :bq='item' v-for='(item,n) in arr[num]'></BQ_B>
		<div style='clear:both;'></div>
	</div>
</template>
<script>
	import BQ_B from'./bq_bar'
	export default{
		components:{
			BQ_B
		},
		data:function(){
			return {
				arr:[
					['上班这点事','旅行在路上','短篇小说','连载小说','黛玉日报','@IT互联网','婚姻育儿','诗'],
					['上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事'],
					['奇思妙想','社会热点','历史','音乐天堂','散文','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事'],
					['上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事','上班这点事'],
				],
				
			}
		},
		methods:{
			
		},
		props:['num']
	}
</script>
<style>
	.bq_b_c{margin-top:0.25rem;font-size:0.18rem;}
</style>