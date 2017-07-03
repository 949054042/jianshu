<template>
	<div class='person5'>
		<div class='floor1'>
			<span class='lf'><img src='../assets/images/my_03.jpg'/></span>
			<span class='rt'>
				<h3>我是强强，我发表了文章</h3>
				<p>06.29 8.36</p>
			</span>
		<div style='clear:both'></div>	
		</div>
		<div class='floor2'>
			<h3>2017-6-29</h3>
			<img src='../assets/images/slt_03.jpg'/>
		</div>
		<div class='floor3'>
			<span>
				<div class='pic'>
					<img src='../assets/images/read.svg'/>
				</div>
				<div class='wd'>
					<p>阅读</p>
				</div>
			</span>
			<span>
				<div class='pic' @click='pl'>
					<img src='../assets/images/pl2.svg'/>
				</div>
				<div class='wd'>
					<p>评论</p>
				</div>
			</span>
			<span @click='sc'>
				<div class='pic'>
					<img :src="require('../assets/images/love'+num+'.svg')"/>
				</div>
				<div class='wd'>
					<p>{{love}}</p>
				</div>
			</span>
		</div>
		<div class='pl'  :style='{display:flag}'>
			<div class='contain' contenteditable v-model='txt'></div>
			<div class='button'>
				<button type='button' @click='fb'>发表评论</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {flag:'none',txt:'',
				num:2,love:'喜欢'
			}
		},
		methods:{
			pl:function(){
				if(this.flag=='none')
				{
					this.flag='block'
				}
				else
				{
					this.flag='none'
				}
			},
			fb:function(){
				this.flag='none';
				this.txt=''
			},
			sc:function(){
				if(this.num==2)
				{
					this.num=3
					this.love=''
				}
				else
				{	
					this.num=2
					this.love='love'
				}
			}
		}
	}
</script>
<style>
	.person5{width:100vw;border-bottom:0.01rem solid #d5d5d5;}
	.person5 .floor1 span{float:left;display:block}
	.person5 .floor1 span:nth-child(1){width:15vw;height:1rem;}
	.person5 .floor1 .lf img{width:0.6rem;height:0.6rem;display:block;margin-left:8vw;margin-top:0.3rem;}
	.person5 .floor1 span:nth-child(2){width:80vw;height:0.7rem;font-family:'宋体 常规';text-align:left;padding-left:5vw;padding-top:0.3rem;}
	.person5 .floor1 span:nth-child(2) h3{font-weight:normal;font-size:0.3rem;}
	.person5 .floor1 span:nth-child(2) p{font-weight:normal;font-size:25px;color:#c9c9c9}
	.person5 .floor2{width:100vw;height:2.3rem;text-align:left;}
	.person5 .floor2 h3{font-size:0.35rem;color:#2f2f2f;font-family:'宋体 常规';padding-left:8vw;width:92vw;margin-top:0.4rem;}
	.person5 .floor2 img{margin-left:8vw;margin-top:0.4rem;}
	.person5 .floor3{width:55vw;height:0.7rem;text-align:left;padding-left:45vw;}
	.person5 .floor3 span{display:block;float:left;font-size:0.25rem;color:#b5b5b5;text-align:center;height:0.33rem;width:1rem;line-height:0.35rem;margin-right:0.32rem;}
	.person5 .floor3 .pic{width:0.42rem;height:0.33rem;}
	.person5 .floor3 .wd{width:0.57rem;height:0.33rem;}
	.person5 .floor3 span p{display:inline-block;}
	.person5 .floor3 span img{width:0.4rem;height:0.33rem;}
	.person5 .floor3 div{float:left;}
	.person5 .pl{width:100vw;height:3.08rem;border-bottom:0.01rem solid #d5d5d5;background:#fcfcfc}
	.person5 .pl .contain{width:92vw;height:1.6rem;margin:0 auto;border:0.01rem solid black;margin-top:0.35rem;font-size:20px;text-align:left;border-radius:0.1rem;}
	.person5 .pl .button{width:100vw;height:0.7rem;padding-top:0.3rem;}
	.person5 .pl button{width:1.2rem;height:0.52rem;background:#49be38;border-radius:0.1rem;text-align:center;color:#ffffff;display:block;float:right;margin-right:0.3rem;font-size:0.22rem;font-family:'宋体 常规';border:none;}
</style>