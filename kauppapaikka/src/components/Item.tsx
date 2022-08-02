import { listedItem } from "../interfaces/interfaces";
import { Button } from "flowbite-react";

interface Props {
  title: string;
  price: string;
  date: string;
}

const Item: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <div>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
      </div>
      <div>
        <h1>{props.title}</h1>
        <h1>{props.price}</h1>
        <h1>{props.date}</h1>
      </div>
    </div>
  );
};

export default Item;
