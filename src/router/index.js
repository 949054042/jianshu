import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Add from '../pages/add/Add'
import Discovery from '../pages/discovery/Discovery'
import My from '../pages/mine/My'
import Message from '../pages/message/Message'
import HC1 from '../components/Home_child1'
import Person from '../pages/personal/Person'
import Person0 from '../components/person5'
import Person1 from '../components/person6'
import Person2 from '../components/person7'
Vue.use(Router)
function scrollBehavior(to, from, savedPosition){
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
	{
      path: '/Discovery',
      name: 'Discovery',
      component: Discovery,
    },
	{
      path: '/Add',
      name: 'Add',
      component: Add,

    },
	{
      path: '/My',
      name: 'My',
      component: My
    },
	{
      path: '/Message',
      name: 'Message',
      component: Message
    },
	{path:'/GZ',component:HC1,name:'HC1'},
	{path:'/Person',component:Person,name:'Person',
		children:[
			{path:'/Person/person0',component:Person0},
			{path:'/Person/person1',component:Person1},
			{path:'/Person/person2',component:Person2}
		]
		
	}
  ],
}
)