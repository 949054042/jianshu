<template>
	<div class='home'>
		<Adc></Adc>
	</div>
</template>
<script>
	import Adc from'../../components/add_contain'
	export default{
		components:{
			Adc
		},
		created:function(option){
		},
		 beforeRouteEnter(to, from, next) {
		next()
	  },
	  beforeRouteLeave(to, from, next) {
	  console.log('hehe')
		next()
	  },
	  mounted:function(){
	  console.log(this.$route.query)
	  }
	}
</script>