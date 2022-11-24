import React, {useState, MouseEvent} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import Logo from '../../assets/img/LOGO.png'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const isAuth = false;

  const navigate = useNavigate();

  return (
      <div className="flex flex-col items-center w-[100px] min-h-screen bg-gray-50 rounded-tr-lg">
        <img className="w-[52px] h-[56px] mt-[21px]" src={Logo} alt="LOGO" />
        <ul className="w-full flex flex-col items-center cursor-pointer">
          <li
              onClick={() => setVisible(isVisible => !isVisible)}
              className="pr-2 pl-2 mt-7 pointer"
          >
            <PersonIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 mt-[254px] mb-25px hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <CalendarMonthIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 mt-[25px] hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <FitnessCenterIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 mt-[25px] mb-[25px] hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <GroupsIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <VolunteerActivismIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 mt-[25px] mb-[25px] hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <PsychologyIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <InterpreterModeIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 mt-[25px] mb-[25px] hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <FeedbackOutlinedIcon fontSize="large"/>
          </li>
          <li className="border-transparent border-l-[6px] pr-2 pl-2 hover:border-indigo-600 border-l-[6px] mr-[6px] cursor-pointer">
            <NotInterestedOutlinedIcon fontSize="large"/>
          </li>
        </ul>
        {isVisible && !isAuth
            ?
              <div className="absolute flex justify-center flex-col w-[154px] bg-gray-50 rounded-lg shadow-md bottom-[85%] left-[4%]">
                <button
                    onClick={() => navigate("/login")}
                    className="border-solid w-full text-center py-[6px] text-xs border-b border-gray-200 hover:bg-gray-200 rounded-t-lg"
                >
                  Войти в аккаунт
                </button>
                <button
                    onClick={() => navigate("/registration")}
                    className="w-full text-center py-[6px] text-xs hover:bg-gray-200 rounded-b-lg"
                >
                  Зарегистрироваться
                </button>
              </div>
            : isVisible && isAuth
                ?
                  <div className="relative flex  justify-center flex-col w-[154px] bg-gray-50 rounded shadow-md bottom-[72.5%] left-[105%] rounded">
                    <button className="w-full text-center py-[6px] text-xs hover:bg-gray-200">
                      Выйти из аккаунта
                    </button>
                  </div>
                : ''
        }
      </div>
  );
};

export default Navbar;
