// Define routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
  ];
  
  // Create router instance
  const router = new VueRouter({
    routes,
    //mode: 'history'
  });
  
  // Create Vue instance
  const app = new Vue({
    router
  }).$mount('#app');