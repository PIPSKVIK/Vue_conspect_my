import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/modalPage',
    name: 'ModalPage',
    component: () => import('../views/ModalPage')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import('../views/Transition')
  },
  {
    path: '/deep-vue',
    name: 'DeepVue',
    redirect: { name: 'reactivity' },
    component: () => import('../views/DeepIntoVue'),
    props: true,
    children: [
      {
        path: 'reactivity',
        name: 'reactivity',
        props: true,
        component: () =>
          import(
            '../components/componentsDeepIntoVue/reactivity/ReactivityLimitation'
          )
      },
      {
        path: 'key',
        name: 'keyAndVirtualDom',
        props: true,
        component: () =>
          import(
            '../components/componentsDeepIntoVue/keyAndVirtualDom/KeyAndVirtualDom'
          )
      },
      {
        path: 'IfNotHaveIdForList',
        name: 'IfNotHaveIdForList',
        props: true,
        component: () =>
          import(
            '../components/componentsDeepIntoVue/keyAndVirtualDom/IfNotHaveIdForList'
          )
      },
      {
        path: 'renderComponent',
        name: 'renderComponent',
        props: true,
        component: () =>
          import(
            '../components/componentsDeepIntoVue/keyAndVirtualDom/renderFunction/RenderComponent'
          )
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form'),
    children: [
      {
        path: 'example2',
        name: 'Example2',
        props: true,
        component: () => import('../components/form/Example2/Example2FormComponent')
      },
      {
        path: 'example3',
        name: 'Example3',
        props: true,
        component: () => import('../components/form/Example3/Example3FormComponent')
      },
      {
        path: 'example4',
        name: 'Example4',
        props: true,
        component: () => import('../components/form/Example4/Example4FormComponent')
      }
    ]
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/Toast')
  },
  {
    path: '/reusability',
    name: 'Reusability',
    component: () => import('../views/Reusability')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/VueX')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
