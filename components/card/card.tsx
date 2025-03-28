interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: {
    url: string;
    alt: string;
  };
  sectionOneContent: React.ReactNode;
  sectionTwoContent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  image,
  sectionOneContent,
  sectionTwoContent,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`card flex flex-col divide-y-[1px] border border-white h-full ${props.className}`}
    >
      {image && (
        <div className="card-image-container relative w-full pt-[56.25%]">
          <img 
            className="image absolute top-0 left-0 w-full h-full object-cover" 
            src={image.url} 
            alt={image.alt} 
          />
        </div>
      )}
      <div className="section-one px-3 py-2 bg-opacity-80">{sectionOneContent}</div>
      <div className="section-two flex-grow flex flex-col px-3 py-3">{sectionTwoContent}</div>
    </div>
  );
};

export default Card;