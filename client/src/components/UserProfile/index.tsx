import React, {useEffect, useState} from 'react';
import UserProfileImg from '../../assets/img/UserProfileImg.png';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import Cookies from 'js-cookie';

type TUser = {
  userFIO: string;
  userMobilePhone: string;
  userFaculty: string;
  userGroup: string;
}

const UserProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<TUser>({
    userFIO: '',
    userMobilePhone: '',
    userFaculty: '',
    userGroup: '',
  })

  const userState = useAppSelector(state => state.login.loadingData)

  useEffect(() => {
    const userDataCookies = Cookies.get('user') as string;

    if (userDataCookies) {
      const userDataCookiesJSON = JSON.parse(userDataCookies);

      setUserData({
        userFIO: userDataCookiesJSON.userFIO,
        userMobilePhone: userDataCookiesJSON.userMobilePhone,
        userFaculty: userDataCookiesJSON.userFaculty,
        userGroup: userDataCookiesJSON.userGroup,
      })
      console.log(1)
    }
  }, [userState])


  return (
      <div className="flex items-center flex-col w-full">
        <h1 className="font-medium mt-[121px] leading-[48px] text-[2.5rem]">Личный кабинет</h1>
        <div className="w-full mt-[91px] flex justify-center">
          <div className="h-[282px] flex items-start justify-content">
            <img className="w-[241px] h-[241px] rounded-full object-contain" src={UserProfileImg} alt="userProfileImg"/>
          </div>
          <div className="ml-[74px]">
            <p className="text-xl text-gray-500">
              ФИО: <span className="text-black"> {userData.userFIO}</span>
            </p>
            <p className="text-xl my-[50px] text-gray-500">
              Мобильный телефон: <span className="text-black">{userData.userMobilePhone}</span>
            </p>
            <p className="text-xl text-gray-500">
              Факультет: <span className="text-black">{userData.userFaculty}</span>
            </p>
            <p className="text-xl mt-[50px] text-gray-500">
              Группа: <span className="text-black">{userData.userGroup}</span>
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
