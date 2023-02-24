import { Wrapper } from "./style";

const Card = ({ title, image, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Image src={image} />
    </Wrapper>
  );
};

export default Card;
