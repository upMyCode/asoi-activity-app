import React from 'react';
import {Navbar, Container, AuthContainer, UserRegistrationForm} from '../../components';
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
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
                      className="inline-block rounded-lg  ml-[52px] bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    <span className="text-indigo-200" aria-hidden="true">&larr;</span>
                    На главную
                  </button>
              </div>
              <div className="w-full mt-[14px] mb-[6.75rem] flex justify-center items-center">
                <AuthContainer>
                 <UserRegistrationForm />
                </AuthContainer>
              </div>
            </div>
          </Container>
        </div>
      </div>
  )
};

export default RegistrationPage;