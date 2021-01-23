import lufian8 from '@/lufian8'
import {mount } from '@vue/test-utils'


describe('lufian8 acıklama dataları' , () =>{
    test('acıklama1', () => {
        const wrapper = mount(lufian8)
        expect(wrapper.vm.aciklama.acik1).toBe('Spey Spor Gömlek Slim Fit Yeşil')
    })
    test('acıklama2', () => {
        const wrapper = mount(lufian8)
        expect(wrapper.vm.aciklama.acik2).toBe('Kinross Spor Gömlek Comfort Slim Fit Mavi')
    })
    test('acıklama3', () => {
        const wrapper = mount(lufian8)
        expect(wrapper.vm.aciklama.acik3).toBe('Agento Smart Gömlek Slim Fit Mavi')
    })
    test('acıklama4', () => {
        const wrapper = mount(lufian8)
        expect(wrapper.vm.aciklama.acik4).toBe('Andrews Smart Gömlek Slim Fit İndigo')
    })
    
})

describe('lufian8 foto dataları', () => {
    test('foto1', ()=>{
        const wrapper = mount(lufian8)
        expect(wrapper.vm.foto.src1).toBe('https://cdn.lufian.com/hansen-smart-gomlek-slim-fit-lacivert-gomlek-lufian-143451-35-K.jpg')
    })
    test('foto1', ()=>{
        const wrapper = mount(lufian8)
        expect(wrapper.vm.foto.src2).toBe('https://cdn.lufian.com/brian-smart-gomlek-slim-fit-pembe-gomlek-lufian-147229-16-K.jpg')
    })
    test('foto1', ()=>{
        const wrapper = mount(lufian8)
        expect(wrapper.vm.foto.src3).toBe('https://cdn.lufian.com/mull-smart-gomlek-slim-fit-saks-gomlek-lufian-147387-85-K.jpg')
    })
    test('foto1', ()=>{
        const wrapper = mount(lufian8)
        expect(wrapper.vm.foto.src4).toBe('https://cdn.lufian.com/forfar-smart-gomlek-slim-fit-saks-gomlek-lufian-147340-84-K.jpg')
    })
})