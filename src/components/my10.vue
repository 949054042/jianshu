<template>
		<div class='FG3'>
			<MY9 v-for='(item,n) in arr' :p='item.p'></MY9>
			<div style='margin-bottom:0.5rem;'></div>
		</div>
</template>
<script>
import MY9 from'./my9'
	export default{
		components:{
			MY9
		},
		data:function(){
			return {
				arr:[
					{p:'分享简书APP'},
					{p:'帮助与反馈'},
					{p:'给简书评分'}
				]
			}
		}
	}
</script>
<style>
	.FG3{width:96vw;height:0.69rem;border-bottom:1px solid #b0b0b0;border-radius:0.05rem;position:relative;margin-left:4vw;}
</style>