import Lufian7 from '@/lufian7'
import {mount , shallowMount } from '@vue/test-utils'

test('data',() => {
    console.log(Lufian7)
    
})
describe('lufian7',()=>{

    
    test('urunler', ()=>{
        const wrapper = shallowMount(Lufian7)
        const divArray = wrapper.findAll('div')

        const secondDiv = divArray.at(1)
        expect(secondDiv.is('div')).toBe(true)

        const lastDiv = divArray.at(-1)
        expect(lastDiv.is('div')).toBe(true)


    })
    test('boş mu', ()=>{
        const wrapper = mount(Lufian7)
        expect(wrapper.isEmpty()).toBe(false)
        
    })
    test('show', ()=>{
        const wrapper = mount(Lufian7)
        expect(wrapper.vm.show).toBe(true)
    })
    test('showrenk', ()=>{
        const wrapper = mount(Lufian7)
        expect(wrapper.vm.showrenk).toBe(true)
    })
})