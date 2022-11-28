import React from 'react';
import { Container, Navbar } from "../../components";
import { UserProfile } from "../../components";

const UserProfilePage = () => {
  return (
      <div className="w-full min-h-screen">
        <div className="flex w-full">
          <Navbar />
          <Container >
            <UserProfile />
          </Container>
        </div>
      </div>
  );
};

export default UserProfilePage;
