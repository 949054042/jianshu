<template>
	<div class='person7'>
		<Person10></Person10>
		<div class='fgx'></div>
		<Person12></Person12>
	</div>
</template>
<script>
import Person10 from'./person10'
import Person12 from'./person12'
	export default{
		components:{
			Person10,
			Person12
		}
	}
</script>
<style>
	.fgx{width:100vw;height:0.4rem;background:#fcfcfc;}
</style>