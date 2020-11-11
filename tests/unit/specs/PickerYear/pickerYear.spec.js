import PickerYear from '@/components/datepicker/PickerYear.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';
import {
  getFullYear,
} from '@/components/datepicker/utils/DateUtils';

let en;

describe('PickerYear', () => {
  
  beforeEach(()=>{
    en = Langlist.data['en'];
  })
  
  let wrapper
  beforeEach(() => {
    wrapper = mount(PickerYear, {
      shallow: true,
      props: {
        allowedToShowView: () => true,
        translation: en,
        pageDate: new Date(2018, 1, 1),
        selectedDate: new Date(2018, 2, 24)
      }
    })
  })

  it('knows the selected year', async () => {
    const newDate = new Date(2020, 1, 1)
    await wrapper.setProps({
      selectedDate: newDate
    })
    expect(wrapper.vm.selectedDate).toBe(newDate)
    expect(getFullYear(wrapper.vm.selectedDate)).toBe(2020)
    expect(wrapper.vm.selectedDate).not.toBe(new Date(2017, 1, 1).toISOString())
  })

  it('can set the next decade', () => {
    wrapper.vm.nextDecade();
    expect(wrapper.emitted()['changed-decade']).toBeTruthy()
  })

  it('can set the previous decade', () => {
    wrapper.vm.previousDecade()
    expect(wrapper.emitted()['changed-decade']).toBeTruthy()
  })

  it('formats the decade range', async () => {
    await wrapper.setProps({
      pageDate: new Date(2021, 1, 1)
    })
    expect(wrapper.vm.getPageDecade).toEqual('2020 - 2029')
    await wrapper.setProps({
      pageDate: new Date(2001, 1, 1)
    })
    expect(wrapper.vm.getPageDecade).toEqual('2000 - 2009')
  })

  it('emits an event when selected', async () => {
    await wrapper.find('.cell').trigger('click')
    expect(wrapper.emitted()['select-year']).toBeTruthy()
  })
})
