import lufian1 from '@/lufian1'
import { mount , shallowMount } from '@vue/test-utils'




describe('Lufian1', () => {
    test('mount a vue component',() =>{
        const wrapper = mount(lufian1)
        expect(wrapper.vm.$props)
       
    })

    test('lufian1 shallowmount',() => {
        console.log(mount(lufian1).html())
        console.log(shallowMount(lufian1).html())
    })
    test('data',() => {
    console.log(lufian1)
    
    })

  })
    
  test('fetch data', ()=> {
        const jsonMock = jest.fn().mockResolvedValue()
        window.fetch = jest.fn().mockResolvedValue({
            json:jsonMock
        })
        
        const wrapper = mount(Lufian1,{
            
        })
    })

  