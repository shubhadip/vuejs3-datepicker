import Datepicker from '@/components/datepicker/DatePickerComponent.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('Datepicker with open date', () => {
  beforeEach(()=>{
    en = Langlist.data['en'];
  })

  const openDate = new Date()
  let wrapper
  beforeEach(() => {
    wrapper = mount(Datepicker, {
      props: {
        openDate: openDate
      }
    })
  })

  it('should be set to October', () => {
    expect(wrapper.vm.pageDate.getMonth()).toEqual(new Date().getMonth())
    expect(wrapper.vm.pageDate.getFullYear()).toEqual(new Date().getFullYear())
  })

  it('should set pageTimestamp to be first day of open date\'s month', () => {
    const date = new Date(wrapper.vm.pageTimestamp)
    expect(wrapper.vm.openDate.getTime()).toEqual(openDate.getTime())
    wrapper.vm.setPageDate()
    expect(date.getFullYear()).toEqual(openDate.getFullYear())
    expect(date.getMonth()).toEqual(openDate.getMonth())
    expect(date.getDate()).toEqual(1)
  })

  it('should open with selected date if one is set', () => {
    const newDate = new Date(2018, 10, 9)
    wrapper.vm.selectDate({timestamp: newDate.getTime()})
    expect(wrapper.vm.pageDate.getMonth()).toEqual(10)
    expect(wrapper.vm.pageDate.getFullYear()).toEqual(2018)
  })

  it('should show today\'s date if no open date is set', () => {
    wrapper = mount(Datepicker)
    const today = new Date()
    expect(wrapper.vm.pageDate.getMonth()).toEqual(today.getMonth())
    expect(wrapper.vm.pageDate.getFullYear()).toEqual(today.getFullYear())
  })
})
