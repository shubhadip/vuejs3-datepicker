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

  it('should render correct contents', () => {
    expect(wrapper.findAll('.vuejs3-datepicker__calendar')).toHaveLength(1)
  })
})
