import React from 'react';
import IMG from '../../assets/img/PinPong.jpeg';
import EventCard from '../EventCard';

const eventData = {
  title: 'Чемпионат по теннису',
  eventType: 'Спортивное мероприятие',
  eventDate: '12.10.2022',
  eventTime: '19:00',
  freeSeats: 4,
  img: IMG ,
  ticketPrice: '50.0 руб.',
  venue: 'ГГУ им. Ф. Скорины',
  sponsor: 'ГГУ им. Ф. Скорины',
  sponsorEmail: 'ГГУ им. Ф. Скорины',
  sponsorPhone: '+375291278899',
  eventDescription: 'Это мероприятие по настольному теннису. Соревнование проводится для оздоровления студентов.'
}

const EventItem = () => {
  return (
      <div className="w-full mx-[15px]">
        <h1 className="font-medium  leading-[48px] text-[2.5rem] mb-[50px] text-center">
          {eventData.eventType}
        </h1>
        <EventCard
            title={eventData.title}
            eventType={eventData.eventType}
            eventDate={eventData.eventDate}
            eventTime={eventData.eventTime}
            freeSeats={eventData.freeSeats}
            img={eventData.img}
            ticketPrice={eventData.ticketPrice}
            venue={eventData.venue}
            sponsor={eventData.sponsor}
            sponsorEmail={eventData.sponsorEmail}
            sponsorPhone={eventData.sponsorPhone}
            eventDescription={eventData.eventDescription}
        />
      </div>
  );
};

export default EventItem;
