import React, {FC} from 'react';
import {ICalendarItemProps} from "./ICalendarItemProps";

const CalendarItem: FC<ICalendarItemProps> = ({
       title,
       eventType,
       freeSeats,
       registrationStatus,
       eventDate,
       img
    }) => {
  return (
      <div className="w-[371px] h-[176px] my-[28px] mx-[13px] rounded-lg shadow-md">
        <div className="ml-[19px] mt-[23px] flex">
          <div className="w-[167px] h-[114px] mr-[10px] rounded-lg">
            <img src={img} className="object-contain" alt="eventImg"/>
          </div>
          <div>
            <p className="text-xs mb-[23px]">{title}</p>
            <p className="text-[10px]">Тип мероприятия: <span>{eventType}</span></p>
            <p className="text-[10px] my-[3px]">Дата: <span className="text-gray-400">{eventDate}</span></p>
            <p className="text-[10px]">Количество мест: <span>{freeSeats}</span></p>
            <div className="w-full flex justify-center">
              {registrationStatus
                  ? <p className="text-[15px] mt-[19px] font-medium text-green-500">Вы записаны</p>
                  : <p className="text-[15px] mt-[19px] font-medium text-red-500">Вы не записаны</p>
              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default CalendarItem;
