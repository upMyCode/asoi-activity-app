import React from 'react';
import {useFormik } from 'formik';
import {RegistrationSchema} from './validation';
import {ExclamationCircle} from 'heroicons-react';
import {useAppDispatch} from '../../app/hooks';
import {fetchUserDate} from './registrationSlice';
import {useNavigate} from 'react-router-dom';

const UserRegistrationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
     dispatch(fetchUserDate(values));
     navigate('/login');
    },
  });

  return (
      <div className="w-[954px] h-[732px] flex-col flex items-center">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] align-center">
          Регистрация пользователя
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
                htmlFor="userEmail"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
                className={
                  formik.errors.userEmail && formik.touched.userEmail
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userEmail"
                name="userEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.userEmail}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userEmail && formik.touched.userEmail && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userEmail && formik.touched.userEmail && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userEmail}
            </div>}
          </div>
          <div className="relative">
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
          <div className="my-[18px] relative">
            <label
                htmlFor="userFaculty"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Факультет
            </label>
            <input
                className={
                  formik.errors.userFaculty && formik.touched.userFaculty
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userFaculty"
                name="userFaculty"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userFaculty}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userFaculty && formik.touched.userFaculty && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userFaculty && formik.touched.userFaculty && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userFaculty}
            </div>}
          </div>
          <div className="relative">
            <label
                htmlFor="userGroup"
                className="block leading-5 text-sm font-medium text-gray-700"
            >
              Группа
            </label>
            <input
                className={
                  formik.errors.userGroup && formik.touched.userGroup
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userGroup"
                name="userGroup"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userGroup}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userGroup && formik.touched.userGroup && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
            {formik.errors.userGroup && formik.touched.userGroup && <div className="text-sm leading-5 font-medium text-red-600">
              *{formik.errors.userGroup}
            </div>}
          </div>
          <div className="my-[18px] relative">
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
          <div className="relative">
            <label htmlFor="userRepeatPassword" className="block leading-5 text-sm font-medium text-gray-700">Повтор пароля</label>
            <input
                className={
                  formik.errors.userRepeatPassword && formik.touched.userRepeatPassword
                      ?
                      "block w-full rounded-md border pl-7 pr-12 py-2 border-solid ring-red-600 border-red-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :
                      "block w-full rounded-md border-gray-300 pl-7 pr-12 py-2 focus:border-indigo-500 ring-indigo-500 focus:border-indigo-500 rsm:text-sm"
                }
                id="userRepeatPassword"
                name="userRepeatPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.userRepeatPassword}
                onBlur={formik.handleBlur}
            />
            {formik.errors.userRepeatPassword && formik.touched.userRepeatPassword && (
                <span className="flex justify-start items-start text-red-600  text-xs font-body">
                  <span className="absolute pt-0.5 pr-1 top-[38%] left-[90%]">
                    <ExclamationCircle className="text-red-600 w-4 h-4" />
                  </span>
                </span>
            )}
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
