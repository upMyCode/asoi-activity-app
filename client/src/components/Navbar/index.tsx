import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import Logo from '../../assets/img/LOGO.png'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';

const Navbar = () => {
  return (
      <div className="flex flex-col items-center w-[100px] min-h-screen bg-gray-50 rounded-tr-lg">
        <img className="w-[52px] h-[56px] mt-[21px]" src={Logo} alt="LOGO" />
        <ul>
          <li className="mt-7">
            <PersonIcon fontSize="large"/>
          </li>
          <li className="mt-[254px] mb-25px">
            <CalendarMonthIcon fontSize="large"/>
          </li>
          <li></li>
          <li className="mt-[25px] mb-[25px]">
            <GroupsIcon fontSize="large"/>
          </li>
          <li>
            <VolunteerActivismIcon fontSize="large"/>
          </li>
          <li className="mt-[25px] mb-[25px]">
            <PsychologyIcon fontSize="large"/>
          </li>
          <li></li>
          <li className="mt-[25px] mb-[25px]">
            <FeedbackOutlinedIcon fontSize="large"/>
          </li>
          <li>
            <NotInterestedOutlinedIcon fontSize="large"/>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
