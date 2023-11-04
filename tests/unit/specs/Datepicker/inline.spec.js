import Datepicker from '@/components/datepicker/DatePickerComponent.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;
describe('Datepicker.vue inline', () => {
  beforeEach(()=>{
    en = Langlist.data['en'];
  })
  let wrapper
  beforeEach(() => {
    wrapper = mount(Datepicker, {
      propsData: {
        inline: true
      }
    })
  })

  it('should not showCalendar as already open', () => {
    expect(wrapper.vm.showCalendar()).toBeFalsy()
    expect(wrapper.vm.isInline).toEqual(true)
  })

  it('should not close the calendar when date is selected', () => {
    const date = new Date()
    wrapper.vm.selectDate({timestamp: date.getTime()})
    expect(wrapper.vm.isOpen).toEqual(true)
    document.body.click()
    expect(wrapper.vm.isOpen).toEqual(true)
  })
})
