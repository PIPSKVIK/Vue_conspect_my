import AppInput from '@/components/AppComponents/AppInput';
import { mount } from '@vue/test-utils';

describe('AppInput', () => {
  it('Должен быть определен', () => {
    expect(AppInput).toBeDefined()
  });

  // В этом примере мы смотрим что элемент .input-control рендерится в .input
  it ('должен рендерится input.input-control внутри .input" ', () => {
    const wrapper = mount(AppInput)
    const input = wrapper.find('.input')
    const inputControl = input.find('.input-control')

    expect(inputControl.exists()).toBe(true)
    expect(input.exists()).toBe(true)
  });

  //задач => если передан вхожной пораметр radius, добавляем class .input-control_radius
  it ('должен иметь .input-control_radius в input, только когда radius === true', async () => {
    const wrapper = mount(AppInput) // Создаем некую обертку.

    // Проверим что нет calss на эдементе
    const input = wrapper.find('input')
    expect(input.classes('input-control_radius')).toBe(false)

    // Теперь проверим что передаеться входной параметр
    // Когда сработает ре-рендеринг - этот процесс у нас асинхронный.
    // Достаточно добавить awaint и сделать функцию асинхроонной.
    await wrapper.setProps({ radius: true })
    expect(input.classes('input-control_radius')).toBe(true)
  });

  // Проверим что компонет выводит то значение, которое вводится в поле ввода.
  it ('Должен иметь текущее значение => value', async () => {
    const value = 'Sample value'

    const wrapper = mount(AppInput)
    const input = wrapper.find('input')
    await wrapper.setProps({ value })

    // Нам требуеься проверить что в поле ввода, свойство этого поля ввода value имеет такое значение
    expect(input.element.value).toBe(value)
  })

  // И нужно проверить, что когда что-то вводим у нас пораждается событие с введенным значением.
  it ('Должно прослушиватся событие нативное input и emit введенные данные value', async () => {
    const wrapper = mount(AppInput) // Все так-же монтируем компонент.
    const input = wrapper.find('input') // Находим поле ввода.

    // Теперь нужно с имитировать действие пользователя.
    const value = 'Sample value'

    // input.element.value = value
    // await input.trigger('input') // можем с тригирить событие.

    // Это короткая запись того что выше.
    await input.setValue(value)
    expect(wrapper.emitted().input).toBeDefined() // проверяем что он вообще есть
    // Даллее можем проверить что событие было вызвано один раз.
    expect(wrapper.emitted().input).toHaveLength(1)
    // Последнее нужно проверить само значение, что с этим событием нам пришло value которое мы ввели.
    expect(wrapper.emitted().input[0]).toEqual([value])
  })
});
