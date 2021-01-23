import Lufian3 from '@/lufian3'
import { mount } from '@vue/test-utils'

test('data',() => {
    console.log(Lufian3)
    
})
describe('lufian3' , ()=>{
    test('show', ()=>{
        const wrapper = mount(Lufian3)
        expect(wrapper.vm.show.html()).toBe(true)
    })
})
test('methods',()=>{

const wrapper = mount(Lufian3)
expect(wrapper.attributes().topTutar()).toBe('1299')


})
test('methods',()=>{

    const wrapper = mount(Lufian3)
        expect(wrapper.contains('show')).toBe(true)
    
    
    })


