import PickerDay from '@/components/datepicker/PickerDay.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('PickerDay: DOM', () => {

  beforeEach(()=>{
    en = Langlist.data['en'];
  })

  let wrapper
  beforeEach(() => {
    wrapper = mount(PickerDay, {
      props: {
        allowedToShowView: () => true,
        translation: en,
        pageDate: new Date(2018, 1, 1),
        selectedDate: new Date(2018, 2, 24)
      }
    })
  })

  it('knows the selected date', async () => {
    const newDate = new Date(2016, 9, 15)
    await wrapper.setProps({
      selectedDate: newDate
    })
    expect(wrapper.vm.isSelectedDate(newDate)).toEqual(true)
    expect(wrapper.vm.isSelectedDate(new Date(2017, 1, 1))).toEqual(false)
  })

  it('emits an event when selected', () => {
    wrapper.vm.selectDate({isDisabled: false})
    expect(wrapper.emitted()['select-date']).toBeTruthy()
  })

  it('emits show year calendar event when clicked on the year', () => {
    const yearBtn = wrapper.find('.day__month_btn')
    yearBtn.trigger('click')
    expect(wrapper.emitted()['show-month-calendar']).toBeTruthy()
  })
})
