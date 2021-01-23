import Lufian5 from '@/lufian5'
import { mount } from '@vue/test-utils';

test('data',() => {
    console.log(Lufian5)
    
})
describe('lufian5' , ()=>{



test('show', ()=>{
    const wrapper = mount(Lufian5)
    expect(wrapper.vm.show).toBe(false)
})
test('hover', ()=>{
    const wrapper = mount(Lufian5)
    expect(wrapper.vm.hover).toBe(false)
})


})
