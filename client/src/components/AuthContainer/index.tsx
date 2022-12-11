import React, {PropsWithChildren} from 'react';
import IAuthContainerProps from './IAuthContainerProps';

const AuthContainer = ({children}: PropsWithChildren<IAuthContainerProps>) => {
  return (
      <div>
        {children}
      </div>
  );
};

export default AuthContainer;
