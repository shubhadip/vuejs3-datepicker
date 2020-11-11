import DateInput from '@/components/datepicker/DateInput.vue';
import { shallowMount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('DateInput', () => {

  beforeEach(()=>{
    en = Langlist.data['en'];
  })

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DateInput, {
      propsData: {
        format: 'dd MMM yyyy',
        translation: en,
        typeable: true
      }
    })
  })

  it('does not format the date when typed', async () => {
    const dateString = '2018-04-24'
    const input = await wrapper.find('input')
    wrapper.vm.inputRef.value = dateString
    expect(wrapper.vm.inputRef.value).toEqual(dateString)
    input.trigger('keyup')
    await wrapper.setProps({
      selectedDate: new Date(dateString)
    })
    expect(wrapper.vm.typedDate).toEqual(dateString)
    expect(wrapper.vm.formattedValue).toEqual(dateString)
  })

  it('emits the date when typed', async () => {
    const input = await wrapper.find('input')
    wrapper.vm.inputRef.value = '2018-04-24'
    input.trigger('keyup')
    expect(wrapper.emitted()['typed-date']).toBeDefined()
    expect(wrapper.emitted()['typed-date'][0][0]).toBeInstanceOf(Date)
  })

  it('emits closeCalendar when return is pressed', () => {
    const input = wrapper.find('input')
    const blurSpy = jest.spyOn(input.element, 'blur')
    input.trigger('keyup', {keyCode: 13})
    expect(blurSpy).toBeCalled()
  })

  it('clears a typed date if it does not parse', async () => {
    const input = await wrapper.find('input')
    wrapper.vm.inputRef.value = 'not-a-date'
    input.trigger('blur')
    expect(wrapper.emitted()['clear-date']).toBeDefined()
    expect(wrapper.emitted()['close-calendar']).toBeDefined()
  })

  it('input is hidden if typeable=false', async () => {
    const wrapper = await shallowMount(DateInput, {
      propsData: {
        format: 'dd MMM yyyy',
        translation: en,
        typeable: false
      }
    });
    expect(wrapper.find('input').exists()).toBeFalsy()
    expect(wrapper.find('#calendar-div').exists()).toBeTruthy()
  })
})
