<template>
	<div class='qxy'>
		<MY3 v-for='item in arr' :num1=item.num :p1=item.p></MY3>
		<div style='clear:both'></div>
	</div>
</template>
<script>
import MY3 from './my3'
	export default{
		components:{
		 MY3
		},
		data:function(){
			return {
				arr:[
					{num:0,p:"公开文章"},
					{num:0,p:"关注"},
					{num:0,p:"粉丝"}
				]
			}
		}
	}
</script>
<style>
	.qxy{width:100vw;height:1rem;border:1px solid #d5d5d5;}
</style>