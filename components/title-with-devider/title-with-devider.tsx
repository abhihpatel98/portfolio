import { ReactNode } from "react";

interface TitleWithDeviderProps {
    children: ReactNode;
}

const TitleWithDevider: React.FC<TitleWithDeviderProps> = ({children}) => {
  return (
    <div className="title-with-devider my-8 md:my-10 flex flex-col sm:flex-row items-start sm:items-center">
      <h1 className="title text-xl md:text-2xl font-semibold text-white whitespace-nowrap mb-4 sm:mb-0 sm:mr-6">
        {children}
      </h1>
      <hr className="horizontal-line w-full sm:w-48 md:w-64 lg:w-80 h-[2px] bg-primary border-0"/>
    </div>
  );
};

export default TitleWithDevider;
