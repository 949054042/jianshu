<template>
	<div class='banner swiper-container'>
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src='../assets/images/01.jpg'/></div>
				<div class="swiper-slide"><img src='../assets/images/02.jpg'/></div>
				<div class="swiper-slide"><img src='../assets/images/03.jpg'/></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	import '../assets/lib/swiper/js/swiper.js' 
	export default{
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-container', {
			direction:'horizontal',
			loop: false,
			autoplay:1000,
			// 如果需要分页器
			pagination: '.swiper-pagination',
			autoplayDisableOninteraction:true
		  })    
		}
	}
</script>
<style>
	@import '../assets/lib/swiper/css/swiper.min.css';
	.banner{height:100vw;height:0.5rem;}
	.swiper-container {
    width: 100vw;
    height: 2.5rem;
}
.swiper-container img{width:100vw;}
</style>