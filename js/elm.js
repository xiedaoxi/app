	Vue.component('add',{
		template:`<div>
		<div id='home2' v-if='hidd'>
		<ul id="weiz">
			<li @click='dztab'><img class="wz" src="img/wz.png"><span class="dz">广州天河区元岗街</span>
			<p class="jiao"></p></li>
			<li><ul><h2 class='deg'>21°</h2><p class='tqi'>阴</p></ul>
			<img style="background:#0085ff;width:1.472rem" src="img/tqi.png"></li>
		</ul>
		<div id="ss">
		<a class="ss" href="###"><p></p><span>搜索商家、商品名称</span></a>
		</div>
		<ul id="daoh">
		<span>百果园</span>
		<span>汤</span>
		<span>尊宝比萨</span>
		<span>名店狂欢减20</span>
		<span>奶茶</span>
		<span>披萨</span>
		<span>蛋糕</span>
		<span>麦当劳</span>
		</ul>
		<ul id="menu">
		<a style="text-align: center;"><img src="img/1.jpeg"><br><span>美食</span></a>
		<a style="text-align: center;"><img src="img/2.jpeg"><br><span>晚餐</span></a>
		<a style="text-align: center;"><img src="img/3.jpeg"><br><span>商超便利</span></a>
		<a style="text-align: center;"><img src="img/4.jpeg"><br><span>果蔬生鲜</span></a>
	</ul>
	<ul id="menu">
		<a style="text-align: center;"><img src="img/5.jpeg"><br><span>汉堡薯条</span></a>
		<a style="text-align: center;"><img src="img/6.jpeg"><br><span>大牌5折</span></a>
		<a style="text-align: center;"><img src="img/7.jpeg"><br><span>甜品饮品</span></a>
		<a style="text-align: center;"><img src="img/8.jpeg"><br><span>医药健康</span></a>
	</ul>
	<div id="dian"><p></p><p></p></div>
	<div id="juan"><img src="img/img.png"></div>
	<div style="background: #f5f5f5;height: 0.427rem;"></div>
	<div id='business'><p></p><span>推荐商家</span><p></p></div>
	</div>
	<a href='###' id="arr" v-for='dian in arrD'>
		<img class="d-img" v-bind:src="dian.src">
		<div style="padding-left:0.5rem;width:100%">
		<ul class="brand">
		<li class="brand-left"><span>品牌</span><span>{{dian.text}}</span></li>
		<li class='brand-right'><p>保</p><p>票</p></li>
		</ul>
		<ul style="margin:0.2rem 0;height:0.8rem;display:flex;justify-content: space-between;">
		<li class="xx">
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p v-bind:style='{clipPath:dian.path}'></p><span>{{dian.haopi}}</span>&nbsp
		<span>月售{{dian.month}}</span></li>
		<li style="background: #0097ff;font-size: 0.6rem;height: 0.8rem;color:white">蜂鸟专用</li>
		</ul>
		<ul style="display:flex;justify-content:space-between;font-size:30px; ">
		<li class="qisong"><p>20元起送</p><p style="width:0.06rem;height:0.5rem;background:silver;margin:0.1rem 0.2rem 0 0.2rem;"></p><p>配送费￥5</p></li>
		<li class="juli"><p>{{dian.juli}}km</p><p style="width:0.06rem;height:0.5rem;background:silver;margin:0.1rem 0.2rem 0 0.2rem;"></p><p>27分钟</p></li>
		</ul>
		</div>
	</a>

	<div id="GOODS" v-if='show' v-bind:class='dh'>
	<div id="goods-dz">
	<div id="goods" v-if='show' v-bind:class='dh'><p @click='dztab2'></p><span>选择收货地址</span></div>
	<div style="width: 100%;height: 1.878rem;"></div>
		<a class="goods-dz" href="###"><p></p><span>请输入地址</span></a>
		</div>
	<h1 id='goods-dq'>当前地址</h1>
	<ul id="position">
	<li>{{position}}</li>
	<li @click='dz'><p class="mz" v-bind:class='{xz}'></p><span>重新定位</span></li>
	</ul>
	<p style='height:15rem;background: #f2f2f2;'></p>
	</div>
	<div style='height:2rem'></div>	
	</div>
		`,
		data:function () {   return { xz:false,
			position:'广州元岗区',dh:'',show:false,hidd:true,
			arrD:[{src:'img/d.png',text:'丰收日',month:111,juli:1.1,haopi:5,path:'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d1.png',text:'乐凯披萨',month:123,juli:1.3,haopi:4.9,path:'polygon(50% 0%, 63% 38%, 95% 38%, 95% 48%,68% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d2.jpeg',text:'转角Ta调下',month:212,juli:1.4,haopi:4.7,path:'polygon(50% 0%, 63% 38%, 78% 39%, 69% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d3.png',text:'每日优鲜',month:144,juli:1.8,haopi:4.6,path:'polygon(50% 0%, 63% 38%, 68% 39%, 68% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d4.jpeg',text:'炮坊茶',month:277,juli:1.9,haopi:4.6,path:'polygon(50% 0%, 63% 38%, 68% 39%, 68% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d5.png',text:'暖心沙拉',month:166,juli:1.2,haopi:4.5,path:'polygon(50% 0%, 63% 38%, 63% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'},
			{src:'img/d6.png',text:'正新鸡排',month:187,juli:1.1,haopi:4.5,path:'polygon(50% 0%, 63% 38%, 63% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'}]}  },
		methods:{
			dztab:function(){
				this.dh='GOODS1',this.show=!this.show,h=this,
		setTimeout(function(e){
				h.hidd=false,
				console.log(e)
			},300)
			},
			dztab2:function(){
			this.dh='GOODS2',t=this,this.hidd=true,
		setTimeout(function(e){
				t.show=!t.show,
				console.log(e)
			},300)
			},
			dz:function(){
				this.xz=!this.xz
			},
		}
	})
	Vue.component('add2',{
		template:`<div id="FIND">
	<div style="width:100%;height: 1.9rem"></div>
	<ul id="find-mall">
	<li style="display:flex">
	<ul class="sc"><p>金币商城</p><p>0元好物在这里</p></ul><img class="hw-img" src="img/hw.jpeg"></li>
	<li style="border-left: 1px solid #ededed;display:flex;flex-direction:column">
	<a href="###" class="hot-right"><ul class="bl"><p>有红包快抢</p><p>礼包福利领不停</p></ul><img class="hot-img" src="img/hot.jpeg"></a>
	<a href="###" class="hot-right"><ul class="bl"><p>必吃爆料</p><p>最佳外卖指南</p></ul><img class="hot-img" src="img/hot2.jpeg"></a>
	</li>
	</ul>
	<div style="height:0.5rem;background: #f5f5f5;"></div>
	<img style="width: 100%" src="img/hb.jpeg">
	<div v-for='ms in meishi'>
	<div style="height:0.5rem;background: #f5f5f5;margin-top:-0.21rem"></div>
	<ul id="food">
	<li>
	<p style="width: 1rem;height: 0.05rem;background:black;margin:0.6rem 0px 0 0;"></p>
	<p style="width:0.4rem;height: 0.4rem;border-radius:50%;background:black;margin:0.4rem 0.1rem 0 0;"></p>
	<img style="width: 1rem;height: 1rem;margin:0.05rem 0.05rem 0 0;" v-bind:src="ms.img">
	<span>{{ms.name}}</span>
	<p style="width:0.4rem;height: 0.4rem;border-radius:50%;background:black;margin:0.4rem 0px 0 0.1rem;"></p>
	<p style="width: 1rem;height:0.05rem;background:black;margin:0.6rem 0px 0 0;"></p>
	</li>
	<li>{{ms.name2}}</li>
	</ul>
	<ul id="meishi">
		<li>
		<p style='position:absolute;top:0; background:black;color:white'>{{ms.dazhe1}}</p>
		<img style="width: 4.2rem;height: 4.2rem;" v-bind:src="ms.image1">
		<p style="margin:0.2rem 0 0.2rem 0">{{ms.text1}}</p><p>{{ms.jiage1}}</p>
		</li>
		<li>
		<p style='position:absolute;top:0; background:black;color:white'>{{ms.dazhe2}}</p>
		<img style="width: 4.2rem;height: 4.2rem;" v-bind:src="ms.image2">
		<p style="margin:0.2rem 0 0.2rem 0">{{ms.text2}}</p><p>{{ms.jiage2}}</p>
		</li>
		<li><p style='position:absolute;top:0; background:black;color:white'>{{ms.dazhe3}}</p>
		<img style="width: 4.2rem;height: 4.2rem;" v-bind:src="ms.image3">
		<p style="margin:0.2rem 0 0.2rem 0">{{ms.text3}}</p><p>{{ms.jiage3}}</p>
		</li>
	</ul>
	<div style="font-size:0.8rem;color:#999;text-align:center;padding-bottom: 1rem;">查看更多<span style="margin-left: 0.2rem;color:#999;">></span></div>
	</div>
	<div id="find">发现</div>
	</div>`,
	data:function(){return {
		meishi:[
		{name:'美食热推',name2:'你的口味，我都懂得',text1:'猪杂汤河粉',text2:'荔湾艇仔粥',text3:'腊味双拼煲仔饭',jiage1:'￥15',jiage2:'￥10',jiage3:'￥36',img:'img/zb.png',dazhe1:'',dazhe2:'',dazhe3:'',image1:'img/s1.jpeg',image2:'img/s2.jpeg',image3:'img/s3.jpeg'},
		{name:'天天特价',name2:'你的口味，我都懂得',text1:'猪杂汤河粉',text2:'荔湾艇仔粥',text3:'腊味双拼煲仔饭',jiage1:'￥15',jiage2:'￥10',jiage3:'￥36',img:'img/zb.png',dazhe1:'4.0折',dazhe2:'6.0折',dazhe3:'8.0折',image1:'img/s1.jpeg',image2:'img/s2.jpeg',image3:'img/s3.jpeg'},
		{name:'限时好礼',name2:'你的口味，我都懂得',text1:'猪杂汤河粉',text2:'荔湾艇仔粥',text3:'腊味双拼煲仔饭',jiage1:'￥15',jiage2:'￥10',jiage3:'￥36',img:'img/zb.png',dazhe1:'4.0折',dazhe2:'6.0折',dazhe3:'8.0折',image1:'img/s7.jpeg',image2:'img/s8.jpeg',image3:'img/s9.jpeg'},
		{name:'美食热推',name2:'你的口味，我都懂得',text1:'猪杂汤河粉',text2:'荔湾艇仔粥',text3:'腊味双拼煲仔饭',jiage1:'￥15',jiage2:'￥10',jiage3:'￥36',img:'img/zb.png',dazhe1:'4.0折',dazhe2:'6.0折',dazhe3:'8.0折',image1:'img/s4.jpeg',image2:'img/s5.jpeg',image3:'img/s6.jpeg'}
		]
	}
	}
	})
Vue.component('add3',{
	template:`<div id="order">
		<div class="dind">订单</div>
		<div class="loog">
		<img style="width: 9rem;height: 9rem" src="img/loog.gif">
		<p style="font-size:0.8rem;margin-bottom:0.5rem;color:#333">登入后查看外卖订单</p>
		<button style='border:none;background:transparent'>
		<a href='login.html' style="display:flex;width:6rem;height:2rem;justify-content: center;display: block;font-size:0.8rem;line-height:2rem;color:white;background:#56d176;border-radius:3px;">立即登入</a></button>
		</div>
	</div>`
})
Vue.component('add4',{
	template:`<div id="WOD">
	<div style='height:1.9rem;background:red;'></div>
	<a href='login.html' id="wod">
		<img style="width: 2.3rem;height:2.3rem;border-radius:50%;margin-right:0.5rem;" src="img/toux.jpg">
		<a href='login.html' class="wod">
		<li>登入/注册</li>
		<li>
		<img style='width:0.5rem;height:0.7rem;position:relative;top:0.1rem' src="img/sj.png">
		<span>登入后享受更多特权</span></li>
		</a>
		<p style="width:0.3rem;height:0.3rem;border-bottom:white 0.05rem solid;border-right:white 0.05rem solid;transform: rotate(-45deg);position:absolute;right:1rem;top:2rem"></p>
	</a>
 <ul id="youh">
	<li>
	<img style='width:2rem;height:2rem;' src="img/jb.png"/>
<p class="text-sv">优惠</p>
</li>
	<li>
	<img style='width:2rem;height:2rem;' src="img/jb2.png"/>
<p class="text-sv">金币</p>
</li>
	</ul>
	<div style="background: #f5f5f5;height:0.5rem;"></div>
	<div style="display: flex;padding:0.5rem 0.5rem;border-top:1px solid silver;border-bottom:1px solid silver;">
	<img style="width: 1.2rem;height: 1rem;margin-right:0.2rem" src="img/dz1.png">
	<ul style=" width:100%;display:flex;justify-content:space-between;">
	<li style="font-size:0.7rem;">我的地址</li>
	<li style="width:0.4rem;height:0.4rem;margin-top:0.3rem;border-bottom:1px solid silver;border-right:1px solid silver;transform: rotate(-45deg);"></li>
	</ul>
	</div>
	<div style="background: #f5f5f5;height: 0.5rem;"></div>
	<div style="display: flex;padding:0.5rem 0 0.5rem 0.5rem;border-top:1px solid silver;">
	<img style="width: 1.2rem;height:1rem;margin-right:0.2rem" src="img/dz3.png">
	<ul style=" width:100%;display:flex;justify-content:space-between;border-bottom:1px solid silver;padding:0 0.5rem 0.5rem 0">
	<li style="font-size:0.7rem;">金币商城</li>
	<li style="margin:0.3rem 0 0 0;width:0.4rem;height:0.4rem;border-bottom:1px solid silver;border-right:1px solid silver;transform: rotate(-45deg);"></li>
	</ul>
	</div>
	<div style="display: flex;padding-left:0.5rem;border-bottom:1px solid silver;">
	<img style="width: 1.2rem;height: 1rem;margin-right:0.2rem" src="img/dz2.png">
	<ul style=" width:100%;display:flex;justify-content:space-between;padding:0 0.5rem 0.5rem 0">
	<li style="font-size:0.7rem;">分享拿5元现金</li>
	<li style="margin:0.3rem 0 0 0;width:0.4rem;height:0.4rem;border-bottom:1px solid silver;border-right:1px solid silver;transform: rotate(-45deg);"></li>
	</ul>
	</div>
	<div style="background: #f5f5f5;height: 0.5rem;"></div>
	<div style="display: flex;padding:0.5rem 0 0.5rem 0.5rem;border-top:1px solid silver;">
	<img style="width: 1.2rem;height: 1rem;margin-right:0.2rem" src="img/dz4.png">
	<ul style=" width:100%;display:flex;justify-content:space-between;border-bottom:1px solid silver;padding:0 0.5rem 0.5rem 0">
	<li style="font-size:0.7rem;">我的客服</li>
	<li style="margin:0.3rem 0 0 0;width:0.4rem;height:0.4rem;border-bottom:1px solid silver;border-right:1px solid silver;transform: rotate(-45deg);"></li>
	</ul>
	</div>
	<div style="display: flex;padding-left:0.5rem;border-bottom:1px solid silver;">
	<img style="width: 1.2rem;height: 1rem;margin-right:0.2rem" src="img/dz5.png">
	<ul style=" width:100%;display:flex;justify-content:space-between;padding:0 0.5rem 0.5rem 0">
	<li style="font-size:0.7rem;">下载饿了吗app</li>
	<li style="margin:0.3rem 0 0 0;width:0.4rem;height:0.4rem;border-bottom:1px solid silver;border-right:1px solid silver;transform: rotate(-45deg);"></li>
	</ul>
	</div>
	<div style="height:5rem;background: #f5f5f5;"></div>
	<div style="width:100%;height: 1.9rem;background:#2395ff;text-align: center;font-size: 0.8rem;font-weight:700;line-height:1.9rem;color:white;position: fixed;top:0">我的</div>
	</div>
`
})
a={template:`<add></add>`};
b={template:'<add2></add2>'};
c={template:'<add3></add3>'};
d={template:'<add4></add4>'};
var routes = [
{ path: '/a', component: a },
{ path: '/b', component: b },
{ path: '/c', component: c },
{ path: '/d', component: d },
{ path:'*', redirect:"/a"} ]
var router = new VueRouter({ routes });    
sad=new Vue({
	el:'#app',
	data:{
		main1:false,main2:false,main3:false,main4:false,
		img1:'img/waima1.png',img2:'img/fax1.png',img3:'img/dind1.png',img4:'img/wd1.png'
	},
	methods:{
 	abc1:function(){
 		this.main1=true,this.main2=false,this.main3=false,this.main4=false,
 		this.img1='img/waima2.png',this.img2='img/fax1.png',
 		this.img3='img/dind1.png',this.img4='img/wd1.png'
 	},
 	abc2:function(){
 		this.main2=true,this.main1=false,this.main3=false,this.main4=false,
 		this.img1='img/waima1.png',this.img2='img/fax2.png',
 		this.img3='img/dind1.png',this.img4='img/wd1.png'
 	},
 	abc3:function(){
 		this.main3=true,this.main1=false,this.main2=false,this.main4=false,
 		this.img1='img/waima1.png',this.img2='img/fax1.png',
 		this.img3='img/dind2.png',this.img4='img/wd1.png'
 	},
 	abc4:function(){
 		this.main4=true,this.main1=false,this.main12=false,this.main3=false,
 		this.img1='img/waima1.png',this.img2='img/fax1.png',
 		this.img3='img/dind1.png',this.img4='img/wd2.png'
 	},
 	h:function(e){
				console.log(e)
	}
	},
	router
})