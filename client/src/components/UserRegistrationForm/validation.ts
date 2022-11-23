import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  userFIO: Yup.string()
      .max(50, 'Количество символов должно быть меньше 50')
      .min(2, 'Количество символов должно быть больше 2')
      .required('Поле ФИО является обязательным'),
  userEmail: Yup.string()
      .email('Введите корректный email')
      .required('Поле Email является обязательным'),
  userMobilePhone: Yup.string()
      .required('Номер телефона является обязательным')
      .matches(/^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
          'Введите корректный номер телефон'
      ),
  userFaculty: Yup.string()
      .max(50, 'Количество символов должно быть меньше 50 !')
      .min(2, 'Количество символов должно быть больше 2 !'),
  userGroup: Yup.string()
      .max(50, 'Количество символов должно быть меньше 50 !')
      .min(2, 'Количество символов должно быть больше 2 !'),
  userPassword: Yup.string()
      .required('Поле пароль является обязательным !')
      .matches(
          /^(?=^\S+$)(?=.*[A-z])(?=.*[0-9]).{8,}/,
          "Некорректный пароль !"
      ),
  userRepeatPassword: Yup.string()
          .oneOf([Yup.ref("userPassword")], "Пароли не совпадают !")
          .required('Поле повтор пароль является обязательным')
          .matches(
              /^(?=^\S+$)(?=.*[A-z])(?=.*[0-9]).{8,}/,
              "Некорректный пароль !"
          ),
})