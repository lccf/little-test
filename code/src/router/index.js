import Vue from 'vue';
import Router from 'vue-router';

/* login*/
const Shopping = resolve => require(['../views/Shopping/index'], resolve);
const ShoppingSelect = resolve => require(['../views/Shopping/select'], resolve);
const Address = resolve => require(['../views/Address/index'], resolve);
const AddressPlus = resolve => require(['../views/Address/plus'], resolve);
const AddressEdit = resolve => require(['../views/Address/edit'], resolve);

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/shoppingSelect',
      component: ShoppingSelect
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/addressplus',
      component: AddressPlus
    },
    {
      path: '/addressedit',
      component: AddressEdit
    },
    {
      path: '/',
      redirect: '/shopping'
    }
  ]
});
