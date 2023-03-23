import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginPage.vue'
import ContactList from '../views/ContactList.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact-list',
      name: 'contactlist',
      component: ContactList,
    },
    {
      path: '/add-contact',
      name: 'addcontact',
      component: AddContact
    },
    {
      path: "/edit-contact/:contactId",
      name: "edit-contact",
      component: EditContact
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' && !localStorage.getItem('token')) {
    next('/login')
  } else {
    next()
  }
})




export default router
