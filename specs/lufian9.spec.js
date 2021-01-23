import Lufian9 from '@/lufian9'
import { mount } from '@vue/test-utils'


describe('lufian9',() => {
test('find component', () =>{
    const wrapper = shallowMount(Component, {
        parentComponent: Lufian9
      })
      expect(wrapper.vm.$parent.$options.name).toBe('lufian9')
    })
    

    test('properties',() => {
        const wrapper = mount( Lufian9 ,{
            props:{
                posts:{
                    required:true
                }
            }
        })
        expect(wrapper.props().posts).toBe(true)
        expect(wrapper.props('posts')).toBe(true)
        
    })
    
    test('src1', ()=>{
        const wrapper = mount(Lufian9)
        expect(wrapper.contains(items)).toBe('https://www.lufian.com/Data/EditorFiles/banner/banner4.jpeg')
    })
    test('src2', ()=>{
        const wrapper = mount(Lufian9)
        expect(wrapper.contains(items)).toBe('https://www.lufian.com/Data/EditorFiles/banner/Banner1.jpeg')
    })

    test('src3', ()=>{
        const wrapper = mount(Lufian9)
        expect(wrapper.contains(items)).toBe('https://www.lufian.com/Data/EditorFiles/banner/banner2.jpeg')
    })

    test('src4', ()=>{
        const wrapper = mount(Lufian9)
        expect(wrapper.contains(items)).toBe('https://www.lufian.com/Data/EditorFiles/banner/banner3.jpeg')
    })


    
})
