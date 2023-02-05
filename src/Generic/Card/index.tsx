import { FC } from "react";
import { Wrapper } from "./style";

interface CardProps {
  title: String;
  image?: ImageBitmap;
  onClick?: () => any;
}
const Card: FC<CardProps> = ({ title, image, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Image src={image} />
    </Wrapper>
  );
};

export default Card;
