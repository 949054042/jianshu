<template>
	<div class='home'>
		<Heder @chan='evl'></Heder>
		<List :height='height'></List>
		<SS2></SS2>
		<HBC></HBC>
		<router-view></router-view>
	</div>
</template>
<script>
import Heder from'../../components/home_header'
import List from'../../components/list'
import	SS2 from'../../components/sousuo2'
import	HBC from'../../components/HB_container'
	export default{
		data:function(){
			return {height:0}
		},
		components:{
			Heder,
			List,
			SS2,
			HBC
		},
		methods:{
			evl:function(i)
			{
				this.height=i
				console.log('xq')
			}
		}
	}
</script>