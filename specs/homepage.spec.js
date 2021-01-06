import { mount,shallowMount } from '@vue/test-utils'
import HomePage from '../pages/index.vue'

const factory = () => {
    return shallowMount(HomePage, {
    });
  };

var products=[]
var productquantity

this.$fire.database.ref('/products').on('value',(snapshot)=>{      
    products=snapshot.val()
    productquantity=Object.keys(products).length
})

test('displays message', () => {
    const wrapper = factory();
    const lis=wrapper.find('li')
    
})