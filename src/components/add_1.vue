<template>
	<div class='add_1'>
		<div class='fabu'>
			<span class='x' @click='jump'>x</span><span class='all'>{{cc}}字</span><span class='fb' @click='can'>发布</span>
		</div>
		<textarea placeholder='请输入标题' @keydown='any($event)' v-model='nn'></textarea>
	</div>
</template>
<script>
	export default{
	data:function(){
		return {nn:'',cc:0,bol:true}
	},
		methods:{
			any:function(e){
				this.cc=0
				console.log(this.nn)
				for(var i=0;i<this.nn.length;i++)
				{
					if(this.nn.charCodeAt(i)>0&&this.nn.charCodeAt(i)<128)
					{
						this.cc++
					}
					else{
						this.cc+=2
					}
				}
			},
		can:function(){
			this.nn=''
			this.cc=0
			this.$router.go(-1)
		},
		jump:function(){
			
				this.$router.go(-1)
		
		},
		hh:function(){
			this.bol=!this.bol
		}
	}
}
</script>
<style>
	.add_1{width:100%;}
	.add_1 span{display:block;float:left;}
	.fabu{height:0.78rem;border-bottom:0.01rem solid #d5d5d5;}
	.fabu .x{font-size:0.4rem;font-family:'微软雅黑 Regular';color:#8a8a8a;width:16%;font-size:0.4rem;}
	.fabu .all{font-size:0.3rem;font-family:'微软雅黑 Regular';color:#b1b1b1;margin-top:0.1rem;}
	.fabu .fb{font-size:0.35rem;font-family:'微软雅黑 Regular';color:#ea6f5a;float:right;margin-right:0.2rem;margin-top:0.05rem;}
	.add_1 textarea{width:100%;border:none;border-bottom:0.1rem dashed #eee;font-size:0.4rem}
	.sy{width:2rem;height:0.5rem;font-size:0.3rem;}
	button{font-size:0.5rem;}
.tr-enter-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  font-size:0.1rem;
  color:orange;
}
.tr-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
 .tr-leave-active {
  transform: translateX(10px);
  font-size:0.6rem;
  color:red;
}
</style>