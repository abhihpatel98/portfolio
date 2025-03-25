import { ReactNode } from "react";

interface TitleWithDeviderProps {
    children: ReactNode;
}

const TitleWithDevider: React.FC<TitleWithDeviderProps> = ({children}) => {
  return (
    <div className="title-with-devider my-10 inline-flex items-center">
      <h1 className="title text-2xl font-semibold text-white">{children}</h1>
      <hr className="horizontal-line w-md ml-4 text-primary"/>
    </div>
  );
};

export default TitleWithDevider;
