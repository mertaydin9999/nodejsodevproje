import Vuex from 'vuex'
import lufian1 from '@/lufian1'

import Vue from 'vue'
import { mount } from '@vue/test-utils'

import storeVx from '@/store/index'

Vue.use(Vuex)
const store = new Vuex.Store(storeVx)

test('store yüklendi' , () => {
    const wrapper = mount(lufian1 , {
        store
    })
    storeVx.state.urunList('Kazak')

    expect(wrapper.vm.urunList).toEqual({Ad})
})
test('store çalışıyor')