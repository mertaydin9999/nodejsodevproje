import Lufian10 from '@/lufian10'
import {mount } from '@vue/test-utils'

test('data',() => {
    console.log(Lufian10)
    
})

describe('lufian10',()=>{
    test('kaydet e basılınca',()=>{
        const wrapper = mount(Lufian10)
        const input = wrapper.find('input')
        const button = wrapper.finf('button')

        input.element.value = 'mertyunus'
        input.trigger('input')
        expect(wrapper.vm.checkbox1).toBe('mertyunus')

        button.trigger('click')
        expectt(wrapper.vm.checkbox1).toBe('')
    })
})


