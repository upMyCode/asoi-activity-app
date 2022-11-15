import React from 'react';
import userProfile from '../../assets/img/USER_PROFILE.png';
import { Navbar } from '../../components';

const HomePage = () => {
  return (
      <div className="w-full min-h-screen">
        <div className="flex w-full">
          <Navbar />
          <div className="w-[87.08%] pt-12 pb-[43px] ml-[41px]">
            <div className="w-full h-60 bg-gray-50 rounded-lg flex items-center">
              <div className="flex items-center ml-[161px] w-[997px] h-[161px]">
                <img className="w-[161px] h-[161px]" src={userProfile}  alt="USER_PROFILE"/>
                <div className="ml-[26px]">
                  <p className="font-body text-xl text-gray-500 font-medium">ФИО:</p>
                  <p className="font-body text-xl text-gray-500 font-medium">Мобильный телефон:</p>
                  <p className="font-body text-xl text-gray-500 font-medium">Мобильный телефон:</p>
                  <p className="font-body text-xl text-gray-500 font-medium">Факультет:</p>
                  <p className="font-body text-xl text-gray-500 font-medium">Группа:</p>
                </div>
              </div>
            </div>
            <div className="px-12 flex  items-center flex-col w-full h-[654px] mt-[37px] bg-gray-50 rounded-lg">
              <p className="text-5xl mt-[7.5rem] mb-[106px] font-body font-medium">
                Добро пожаловать в ASOI ACTIVITY
              </p>
              <p className="text-4xl text-center font-body font-medium">
                Наше приложение поможет вам быстро зарегистрироваться на любое событие проходящее в ГГУ  им. Ф. Скорины
              </p>
            </div>
          </div>
        </div>
      </div>
  )
};

export default HomePage;