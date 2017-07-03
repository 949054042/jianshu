<template>
	<div class='person'>
		<Person1 @js='ok'></Person1>
		<Person2></Person2>
		<Person3></Person3>
		<Person14></Person14>
		<Person17 id=1 @num2='num2'></Person17>
	</div>
</template>
<script>
import Person1 from '../../components/person1'
import Person2 from '../../components/person2'
import Person3 from '../../components/person3'
import Person14 from '../../components/person14'
import Person17 from '../../components/person17'
	export default{
		methods:{
			ok:function(i){
				this.num=i
			},
			num2:function(i){
				this.num2=i
			}
		},
		components:{
			Person1,
			Person2,
			Person3,
			Person14,
			Person17
		},
		mounted:function(){
			this.$router.push('/Person/person2?id=6')
		},
		data:function(){
			return {
				num:1,
				num2:1
			}
		}
	}
</script>
<style>
</style>