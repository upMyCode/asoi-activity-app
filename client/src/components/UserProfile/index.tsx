import React from 'react';
import UserProfileImg from '../../assets/img/UserProfileImg.png';
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
      <div className="flex items-center flex-col w-full">
        <h1 className="font-medium mt-[121px] leading-[48px] text-[2.5rem]">Личный кабинет</h1>
        <div className="w-full mt-[91px] flex justify-center">
          <div className="h-[282px] flex items-start justify-content">
            <img className="w-[241px] h-[241px] rounded-full object-contain" src={UserProfileImg} alt="userProfileImg"/>
          </div>
          <div className="ml-[74px]">
            <p className="text-xl text-gray-500">
              ФИО: <span className="text-black"> Иванов Владислав Дрозд</span>
            </p>
            <p className="text-xl my-[50px] text-gray-500">
              Мобильный телефон: <span className="text-black">+375(29)1275667</span>
            </p>
            <p className="text-xl text-gray-500">
              Факультет: <span className="text-black">Автоматизированные системы обработки информации</span>
            </p>
            <p className="text-xl mt-[50px] text-gray-500">
              Группа: <span className="text-black">АС-36</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[273px] mb-[89px]">
          <button
              onClick={() => navigate("/")}
              className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm leading-5  font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            <span className="text-indigo-200" aria-hidden="true">&larr;</span>
            Вернуться на главную
          </button>
        </div>
      </div>
  );
};

export default UserProfile;
