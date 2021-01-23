import lufian2 from '@/lufian2'
import { mount } from '@vue/test-utils'

test('data',() => {
    console.log(lufian2)
    
})
describe('lufian2',()=>{
 
test('mount a vue component',() =>{
    const wrapper = mount(lufian2)
    expect(wrapper.vm.show).toBe(true)
   
})   
test('show',() =>{
    const wrapper = mount(lufian2)
    expect(wrapper.vm.show).toBe(true)
   
})   


})
