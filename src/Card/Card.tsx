import { PropsWithChildren, ImgHTMLAttributes } from "react";
import "./Card.css";

function Container({ children }: PropsWithChildren) {
  return <article className="card">{children}</article>;
}

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;
function Image(props: ImageProps) {
  return <img {...props} className="card__image" />;
}

export function Content({ children }: PropsWithChildren) {
  return <div className="card__content">{children}</div>;
}

export const Card = {
  Container,
  Image,
  Content,
};
