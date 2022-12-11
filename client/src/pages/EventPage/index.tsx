import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Navbar} from '../../components';
import {EventItem} from '../../components';

const EventPage = () => {
  const navigate = useNavigate();

  return (
      <div className="w-full min-h-screen">
        <div className="flex w-full">
          <Navbar />
          <Container >
            <div className="w-full h-[102px] flex items-end">
              <button
                  onClick={() => navigate("/")}
                  className="inline-block rounded-lg  ml-[52px] bg-indigo-600 px-4 py-2 text-sm leading-5  font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              >
                <span className="text-indigo-200" aria-hidden="true">&larr;</span>
                На главную
              </button>
            </div>
            <EventItem />
          </Container>
        </div>
      </div>
  )
};

export default EventPage;
