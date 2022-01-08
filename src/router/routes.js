import { createRouter, createWebHistory } from 'vue-router'
import TestComponent from '../components/TestComponent.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TestComponent,
    }
  ]
})
