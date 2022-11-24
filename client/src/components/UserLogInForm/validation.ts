import * as Yup from 'yup';

export const LogInSchema = Yup.object().shape({
  userFIO: Yup.string()
      .max(50, 'Количество символов должно быть меньше 50')
      .min(2, 'Количество символов должно быть больше 2')
      .required('Поле ФИО является обязательным'),
  userMobilePhone: Yup.string()
      .required('Номер телефона является обязательным')
      .matches(/^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
          'Введите корректный номер телефон'
      ),
  userPassword: Yup.string()
      .required('Поле пароль является обязательным !')
      .matches(
          /^(?=^\S+$)(?=.*[A-z])(?=.*[0-9]).{8,}/,
          "Некорректный пароль !"
      ),
})