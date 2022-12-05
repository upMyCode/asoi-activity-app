import React from 'react';
import {useFormik } from 'formik';
import {
  ExclamationCircle,
} from "heroicons-react";
import {LogInSchema} from "./validation";
import {fetchUserDate} from "./logInSlice";
import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";

type TInitialStateValues = {
  userFIO: string;
  userMobilePhone: string;
  userPassword: string;
}

const UserLogInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:  {
      userFIO: '',
      userMobilePhone: '',
      userPassword: '',
    },
    validationSchema: LogInSchema,
    onSubmit: values => {
      dispatch(fetchUserDate(values));
      navigate('/');
    },
  });

  return (
      <div className="w-[536px] h-[426px] flex-col flex items-center">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] align-center">
          Вход в аккаунт
        </h1>
        <form className="w-[536px] mt-[68px] flex flex-col" onSubmit={formik.handleSubmit}>
          <div className="relative">
            <label
                className="block text-sm leading-5 font-medium text-gray-700"
                htmlFor="userFIO"
            >ФИО
            </label>
            <input
                className={
                  formik.errors.userFIO && formik.touched.userFIO
                    ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userFIO"
                name="userFIO"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userFIO}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userFIO && formik.touched.userFIO && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userFIO && formik.touched.userFIO && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userFIO}
            </div>}
          </div>
          <div className="my-[18px] relative">
            <label
                htmlFor="userMobilePhone"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Мобильный телефон
            </label>
            <input
                className={
                  formik.errors.userMobilePhone && formik.touched.userMobilePhone
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userMobilePhone"
                name="userMobilePhone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userMobilePhone}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userMobilePhone && formik.touched.userMobilePhone && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userMobilePhone && formik.touched.userMobilePhone && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userMobilePhone}
            </div>}
          </div>
          <div className="relative">
            <label
                htmlFor="userPassword"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Пароль
            </label>
            <input
                className={
                  formik.errors.userPassword && formik.touched.userPassword
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userPassword"
                name="userPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.userPassword}
                onBlur={formik.handleBlur}
                autoComplete="true"
            />
            {formik.errors.userPassword && formik.touched.userPassword && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userPassword && formik.touched.userPassword && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userPassword}
            </div>}
          </div>
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
