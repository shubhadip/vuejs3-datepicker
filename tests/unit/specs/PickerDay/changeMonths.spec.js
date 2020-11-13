import PickerDay from '@/components/datepicker/PickerDay.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;
describe('PickerDay: changing months', () => {
  beforeEach(()=>{
    en = Langlist.data['en'];
  })

  let wrapper
  beforeEach(() => {
    wrapper = mount(PickerDay, {
      props: {
        translation: en,
        allowedToShowView: () => true,
        selectedDate: new Date(2018, 2, 24),
        pageDate: new Date(2018, 1, 1)
      }
    })
  })

  it('can set the next month', () => {
    wrapper.vm.nextMonth()
    expect(wrapper.emitted()['changed-month']).toBeTruthy()
    expect(wrapper.emitted()['changed-month'][0][0].getMonth()).toEqual(2)
  })

  it('can set the previous month', () => {
    wrapper.vm.previousMonth()
    expect(wrapper.emitted()['changed-month']).toBeTruthy()
    expect(wrapper.emitted()['changed-month'][0][0].getMonth()).toEqual(0)
  })
})
