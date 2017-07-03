<template>
  <div id="app">
  	<Tab_con></Tab_con>
    <transition :name='transitionName' class='bb' mode="out-in">
		<router-view class='rr'></router-view>
	</transition>
	<div class='aa'></div>
  </div>
</template>

<script>
import Tab_con from"./components/table_contain"
export default {
data:function(){
	return {
		  transitionName: ''
	}
},
  name: 'app',
  components:{
  	Tab_con
  },
  watch: {
    '$route' (to, from) {
		if(to.query.id&&from.query.id)
		{
			console.log('here')
			var a=to.query.id
			var b=from.query.id
			if(a>b)
			{
				this.transitionName='fade-left'
			}
			else
			{
				this.transitionName='fade-right'}
			}
		}
	}
}
</script>

<style>
*{margin:0;padding:0;}
#app {
*{margin:0;padding:0;}
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
}
.bb{transition:all 1s;position:absolute;}
  .fade-left-enter{
  	transform:translate(-100%,0)
  }
  .fade-left-enter-active{
  	transition:all .3s ease
  }
  .fade-left-leave-active{
  	transition:all .3s ease;
  }
  .fade-left-leave-active{
	transform:translate(100%,0);
  }
    .fade-right-enter{
  	transform:translate(100%,0)
  }
  .fade-right-enter-active{
  	transition:all .3s ease
  }
  .fade-right-leave-active{
  	transition:all .3s ease;
  }
  .fade-right-leave-active{
	transform:translate(-100%,0);
  }
</style>
