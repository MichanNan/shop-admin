import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto p-3 md:flex md:p-5 lg:p-10">{children}</div>;
};

export default Container;
