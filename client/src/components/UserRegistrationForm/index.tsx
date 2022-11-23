import React from 'react';
import {useFormik } from 'formik';
import {RegistrationSchema} from "./validation";

type TInitialStateValues = {
  userFIO: string;
  userEmail: string;
  userMobilePhone: string;
  userFaculty: string;
  userGroup: string;
  userPassword: string;
  userRepeatPassword: string;
}


const UserRegistrationForm = () => {
  const formik = useFormik({
    initialValues:  {
      userFIO: '',
      userEmail: '',
      userMobilePhone: '',
      userFaculty: '',
      userGroup: '',
      userPassword: '',
      userRepeatPassword: ''
    },
    validationSchema: RegistrationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <div className="w-[954px] h-[732px] flex-col flex items-center">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] align-center">
          Регистрация пользователя
        </h1>
        <form className="w-[536px] mt-[68px] flex flex-col" onSubmit={formik.handleSubmit}>
          <div>
            <label
                className="block text-sm leading-5 font-medium text-gray-700"
                htmlFor="userFIO"
            >ФИО
            </label>
            <input
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userFIO"
                name="userFIO"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userFIO}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userFIO && formik.touched.userFIO && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userFIO}
            </div>}
          </div>
          <div className="my-[18px]">
            <label
                htmlFor="userEmail"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userEmail"
                name="userEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.userEmail}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userEmail && formik.touched.userEmail && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userEmail}
            </div>}
          </div>
          <div>
            <label
                htmlFor="userMobilePhone"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Мобильный телефон
            </label>
            <input
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userMobilePhone"
                name="userMobilePhone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userMobilePhone}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userMobilePhone && formik.touched.userMobilePhone && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userMobilePhone}
            </div>}
          </div>
          <div className="my-[18px]">
            <label
                htmlFor="userFaculty"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Факультет
            </label>
            <input
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userFaculty"
                name="userFaculty"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userFaculty}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userFaculty && formik.touched.userFaculty && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userFaculty}
            </div>}
          </div>
          <div>
            <label
                htmlFor="userGroup"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Группа
            </label>
            <input
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userGroup"
                name="userGroup"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userGroup}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userGroup && formik.touched.userGroup && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userGroup}
            </div>}
          </div>
          <div className="my-[18px]">
            <label
                htmlFor="userPassword"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Пароль
            </label>
            <input
                className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userPassword"
                name="userPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.userPassword}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userPassword && formik.touched.userPassword && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userPassword}
            </div>}
          </div>
          <div>
            <label htmlFor="userRepeatPassword" className="block leading-5 text-sm font-medium text-gray-700">Повтор пароля</label>
            <input
                className="block w-full rounded-md border-gray-300 pl-7 py-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="userRepeatPassword"
                name="userRepeatPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.userRepeatPassword}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userRepeatPassword && formik.touched.userRepeatPassword && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userRepeatPassword}
            </div>}
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="inline-block rounded-lg  bg-indigo-600 mt-[47px] px-[17px] py-2 text-sm leading-5 font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
  );
};

export default UserRegistrationForm;
