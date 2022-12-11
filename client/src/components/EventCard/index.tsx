import React, {FC} from 'react';
import {IEventCardProps} from './IEventCardProps';

const EventCard: FC<IEventCardProps> =
    ({
       title,
       eventType,
       eventDate,
       eventTime,
       freeSeats,
       img,
       ticketPrice,
       venue,
       sponsor,
       sponsorEmail,
       sponsorPhone,
       eventDescription
    }) => {
  return (
      <div className="w-full flex justify-center">
        <div className="w-[942px] shadow-md mb-[98px]">
          <div className="w-full mt-[78px] mx-[21px] flex">
            <div className="rounded-lg mr-[26px]">
              <img src={img} className="object-contain w-[466px] h-[387px]"  alt="eventEmg"/>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[2rem] font-medium leading-10 mt-[12px]">{title}</h2>
              <p className="text-base font-normal my-[12px]">
                Тип мероприятия : {eventType}
              </p>
              <p className="text-base font-normal">
                Дата :
                {" "}
                <span className="text-gray-400">{eventDate}</span>
              </p>
              <p className="text-base font-normal my-[12px]">
                Время :
                {" "}
                <span className="text-gray-400">{eventTime}</span>
              </p>
              <p className="text-base font-normal">
                Количество мест : {freeSeats}
              </p>
              <p className="text-base font-normal my-[12px]">
                Стоимость билета :
                {" "}
                <span className="text-gray-400">{ticketPrice}</span>
              </p>
              <p className="text-base font-normal">
                Место проведения : {venue}
              </p>
              <p className="text-base font-normal my-[12px]">
                Организатор : {sponsor}
              </p>
              <p className="text-base font-normal">
                Email организатора :
                {" "}
                <span className="text-gray-400">{sponsorEmail}</span>
              </p>
              <p className="text-base font-normal my-[12px]">
                Телефон организатора :
                {" "}
                <span className="text-gray-400">{sponsorPhone}</span>
              </p>
              <h3 className="text-base font-bold mb-[12px]">
                Описание мероприятия :
              </h3>
              <span className="text-black w-[324px] h-[60px]">{eventDescription}</span>
            </div>
          </div>
          <div className="mt-[54px] mb-[28px] w-full flex">
            <div className="w-[367px] flex justify-between ml-[73px] mr-[148px]">
              <button
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm leading-5  font-medium text-indigo-600 shadow-sm hover:bg-gray-100"
              >
                Записаться
              </button>
              <button
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm leading-5  font-medium text-indigo-600 shadow-sm hover:bg-gray-100"
              >
                Записать группу
              </button>
            </div>
            <button
                className="inline-block rounded-lg bg-green-500 px-4 py-2 text-[15px] leading-[28px] font-normal text-white shadow-sm hover:bg-green-600"
            >
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>
  );
};

export default EventCard;
