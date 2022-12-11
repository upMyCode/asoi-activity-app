import React from 'react';
import {CalendarEvents, Container, Navbar} from '../../components';
import {useNavigate} from 'react-router-dom';

const CalendarOfEventsPage = () => {
  const navigate = useNavigate();

  return (
      <div className="w-full min-h-screen">
        <div className="flex w-full">
          <Navbar />
          <Container >
            <div className="w-full">
              <div className="w-full h-[102px] flex items-end">
                <button
                    onClick={() => navigate("/")}
                    className="inline-block rounded-lg  ml-[52px] bg-indigo-600 px-4 py-2 text-sm leading-5  font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  <span className="text-indigo-200" aria-hidden="true">&larr;</span>
                  На главную
                </button>
              </div>
              <div className="w-full mt-[14px] mb-[60px] flex justify-center items-center">
                <CalendarEvents />
              </div>
              <div className="w-full flex mt-[46px] mb-[29px] justify-center">
                <div className="w-[424px] flex justify-between">
                  <button
                      className="inline-block rounded-lg bg-white px-4 py-2 text-sm leading-5  font-medium text-indigo-600 shadow-sm hover:bg-gray-100"
                  >
                    <span className="text-indigo-600" aria-hidden="true">&larr; </span>
                    Ранее
                  </button>
                  <button
                      className="inline-block rounded-lg bg-white px-4 py-2 text-sm leading-5  font-medium text-indigo-600 shadow-sm hover:bg-gray-100"
                  >
                    Далее
                    <span className="text-indigo-600" aria-hidden="true"> &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export default CalendarOfEventsPage;
