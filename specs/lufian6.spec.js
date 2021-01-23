import Lufian6 from '@/lufian6'
import { mount } from '@vue/test-utils'

test('data',() => {
    console.log(Lufian6)
    
})
test('show',()=>{
    const wrapper = mount(Lufian6)
    expect(wrapper.vm.show).toBe(false)
})
test('data props',()=>{
    
    const Lufian6 = {
        template: '<div>{{ msg }}</div>',
        props: ['msg']
      }
      const wrapper = mount(Lufian6, {
        propsData: {
          msg: 'aBC'
        }
      })
      expect(wrapper.text()).toBe('aBC')
})


