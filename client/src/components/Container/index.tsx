import React, { PropsWithChildren } from 'react';
import IContainerProps from "./IContainer";

const Container = ({children}: PropsWithChildren<IContainerProps>) => {
  return (
      <div className="w-[87.08%] bg-gray-50 rounded-md mt-12 mb-[34px] mx-[41px]">
        {children}
      </div>
  );
};

export default Container;
