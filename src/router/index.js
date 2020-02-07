import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MultiMain from '@/multimedia/MainMulti'
import TutoVideo from '@/multimedia/_sub/tutoVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/developper/',
      name: 'MultiMain',
      component: MultiMain,
      children: [
        { 
          path: '/developper/videos',
          name: 'videos',
          component: TutoVideo,
          // children: [
          //   { 
          //     path: '/developper/videos',
          //     name: 'videos',
          //     component: TutoVideo }
          // ]
        }
        
      ]
    }
  ]
})
