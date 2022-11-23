import React from 'react';
import {useFormik } from 'formik';

type TInitialStateValues = {
  userFIO: string;
  userMobilePhone: string;
  userPassword: string;
}

const UserLogInForm = () => {
  const formik = useFormik({
    initialValues:  {
      userFIO: '',
      userMobilePhone: '',
      userPassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <div className="w-[536px] h-[426px] flex-col flex items-center">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] align-center">
          Вход в аккаунт
        </h1>
        <form className="w-[536px] mt-[68px] flex flex-col" onSubmit={formik.handleSubmit}>
          <label
              className="block text-sm leading-5 font-medium text-gray-700"
              htmlFor="userFIO"
          >ФИО
          </label>
          <input
              className="block w-full rounded-md mb-[18px] border-gray-300 py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="userFIO"
              name="userFIO"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userFIO}
          />
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
          />
          <label
              htmlFor="userPassword"
              className="block leading-5 mt-[18px] text-sm font-medium text-gray-700"
          >
            Пароль
          </label>
          <input
              className="block w-full rounded-md border-gray-300 mb-[18px] py-2 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="userPassword"
              name="userPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.userPassword}
          />
          <div className="w-full flex justify-center">
            <button type="submit" className="inline-block rounded-lg  bg-indigo-600 mt-[47px] px-[17px] py-2 text-sm leading-5 font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
              Войти в аккаунт
            </button>
          </div>
        </form>
      </div>
  );
};

export default UserLogInForm;
