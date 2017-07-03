<template>
	<div class='Tabbar'>
		<Person4 v-for='(item,n) in arr' :p='item.p' :id='item.id' @gdd='cpu'></Person4>
		<div style='clear:both'></div>
		<div class='htt' :style="{right:n+'rem'}"></div>
		<router-view></router-view>
	</div>
</template>
<script>
import Person4 from'./person4'
	export default{
		data:function(){
			return {
				arr:[
					{p:'动态',id:0},
					{p:'文章',id:1},
					{p:'更多',id:2}
				],
				num:2,
				n:1.2
			}
		},
		components:{
			Person4
		},
		methods:{
			cpu:function(i){
				console.log(i+'!!!!')
				if(i-this.num<0)
				{
					console.log(i-this.num)
					this.n-=(i-this.num)*2.4
					this.num=i
				}
				else
				{
					this.n+=(this.num-i)*2.4
					this.num=i
				}
			}
		}
	}
</script>
<style>
	.Tabbar{position:relative;height:500px;}
	.htt{background:#ea6f5a;width:0.55rem;height:0.04rem;position:absolute;top:0.48rem;transition:all 1s ease}
</style>