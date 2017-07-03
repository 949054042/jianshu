 <template>
	<div class='user' id='user'>
		<div class='fl1 ff'>
			<span style='margin-right:5px;'><img :src='url'/></span>{{t_1}}</span><span>{{time}}</span>
		</div>
		<div class='fl1 ff'>
			<span>{{t2}}</span>
		</div>
		<div class='fl1 ff'>
			<span>阅读</span><span>评论</span><span>喜欢</span>
		</div>
		<img :src='url2' class='right' v-show='flag2'/>
	</div>
</template>
<script>
	export default{
		props:["url","t_1",'time','t2','url2','flag2']
	}
</script>
<style>
	#user{border-bottom:0.01rem solid #ededed;width:100vw;height:1.5rem;font-family:'宋体 常规';font-size:0.22rem;position:relative;padding-left:0.34rem;}
	#user{text-align:left;}
	#user .ff{margin-bottom:0.08rem;}
	.right{position:absolute;right:0px;top:0px;margin-right:8%;width:11%}
</style>