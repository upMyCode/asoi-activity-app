import React from 'react';
import CalendarItem from '../CalendarItem';
import IMG from '../../assets/img/PinPong.jpeg'

const testArr = [
    {
      title: 'Чемпионат по теннису',
      eventType: 'Спортивное',
      eventDate: '12.10.2022',
      freeSeats: 4,
      img: IMG ,
      registrationStatus: true,
      id: 12,
    },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 13,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 11,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 1,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 2,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 3,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 4,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 5,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 6,
  },

  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 7,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 8,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: false,
    id: 9,
  },
  {
    title: 'Чемпионат по теннису',
    eventType: 'Спортивное',
    eventDate: '12.10.2022',
    freeSeats: 4,
    img: IMG ,
    registrationStatus: true,
    id: 10,
  },
]

const CalendarEvents = () => {
  return (
      <div className="w-full mx-[15px]">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] mb-[68px] text-center">
          Календарь событий
        </h1>
        <div className="w-full overflow-auto h-[590px] max-h-[590px] flex flex-wrap">
          {testArr.map((item) => (
              <CalendarItem
                  key={item.id}
                  eventType={item.eventType}
                  freeSeats={item.freeSeats}
                  registrationStatus={item.registrationStatus}
                  eventDate={item.eventDate}
                  img={item.img}
                  title={item.title}
              />
          ))}
        </div>
      </div>
  );
};

export default CalendarEvents;
