interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: {
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
      className={`card flex flex-col divide-y-[1px] border border-white ${props.className}`}
    >
      {image && image?.url && (
        <img className="image" src={image.url} alt={image.alt} />
      )}
      <div className="section-one px-2 py-1">{sectionOneContent}</div>
      <div className="section-two h-full px-2 py-1">{sectionTwoContent}</div>
    </div>
  );
};

export default Card;
