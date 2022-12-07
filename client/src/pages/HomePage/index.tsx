import React, {useEffect, useState} from 'react';
import userProfile from '../../assets/img/USER_PROFILE.png';
import { Navbar } from '../../components';
import Cookies from 'js-cookie';
import {useAppSelector} from '../../app/hooks';
import {TUser} from './TUser';

const HomePage = () => {
  const [userData, setUserData] = useState<TUser>({
    userFIO: '',
    userMobilePhone: '',
    userFaculty: '',
    userGroup: '',
  })
  const [isLogout, setLogout] = useState(false);
  const userDataCookies = Cookies.get('user') as string;

  const userState = useAppSelector(state => state.login.loadingData)

  useEffect(() => {
    if (userDataCookies) {
      const userDataCookiesJSON = JSON.parse(userDataCookies);

      setUserData({
        userFIO: userDataCookiesJSON.userFIO,
        userMobilePhone: userDataCookiesJSON.userMobilePhone,
        userFaculty: userDataCookiesJSON.userFaculty,
        userGroup: userDataCookiesJSON.userGroup,
      })
    } else {
      console.log('delete')
      setUserData({
        userFIO: "",
        userMobilePhone: "",
        userFaculty: "",
        userGroup: "",
      })
    }
    console.log("Hello i'm here")
  }, [userState])

  // useEffect(() => {
  //   setUserData({
  //     userFIO: "",
  //     userMobilePhone: "",
  //     userFaculty: "",
  //     userGroup: "",
  //   })
  // }, [logoutStatus == true]);


  return (
      <div className="w-full min-h-screen">
        <div className="flex w-full">
          <Navbar />
          <div className="w-[87.08%] pt-12 pb-[43px] ml-[41px]">
            <div className="w-full h-60 bg-gray-50 rounded-lg flex items-center">
              <div className="flex items-center ml-[161px] w-[997px] h-[161px]">
                <img className="w-[161px] h-[161px]" src={userProfile}  alt="USER_PROFILE"/>
                <div className="ml-[26px]">
                  <p className="text-xl text-gray-500"><span className="text-black">
                    ФИО: {userData.userFIO}</span>
                  </p>
                  <p className="text-xl my-[14px] text-gray-500">
                    Мобильный телефон: <span className="text-black">{userData.userMobilePhone}</span>
                  </p>
                  <p className="text-xl text-gray-500">
                    Факультет: <span className="text-black">{userData.userFaculty}</span>
                  </p>
                  <p className="text-xl mt-[15px] text-gray-500">
                    <span className="text-black">Группа: {userData.userGroup}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-12 flex items-center flex-col w-full h-[654px] mt-[37px] bg-gray-50 rounded-lg">
              <p className="text-5xl mt-[7.5rem] mb-[106px]">
                Добро пожаловать в ASOI ACTIVITY
              </p>
              <p className="text-4xl text-center">
                Наше приложение поможет вам быстро зарегистрироваться на любое событие проходящее в ГГУ  им. Ф. Скорины
              </p>
            </div>
          </div>
        </div>
      </div>
  )
};

export default HomePage;