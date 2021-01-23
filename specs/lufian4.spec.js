import Lufian4 from '@/lufian4'
import { mount } from '@vue/test-utils';

test('data',() => {
    console.log(Lufian4)
    
})
describe('lufian4' , ()=>{



    test('show', ()=>{
        const wrapper = mount(Lufian4)
        expect(wrapper.vm.show).toBe(false)
    })
    test('hover', ()=>{
        const wrapper = mount(Lufian4)
        expect(wrapper.vm.hover).toBe(false)
    })
    
    
    })