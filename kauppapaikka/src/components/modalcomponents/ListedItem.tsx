import {Button} from "flowbite-react";
import {useState, useContext} from "react";
import noImageIcon from "../../images/noimage.png";
import CartContext from "../../context/CartContext";

interface ListedItemProps {
  itemInformation: {
    id: string;
    title: string;
    price: string;
    details: string;
    date: string;
    category: string;
    owner: string;
    imageurls: Array<string>;
  };
}

const ListedItem: React.FunctionComponent<ListedItemProps> = ({itemInformation}) => {
  const [selectedPicture, setSelectedPicture] = useState(itemInformation.imageurls[0]);
  const {addItemToCart} = useContext(CartContext);

  // For calling usecontext function, it requires data this way
  const itemobj = {
    title: itemInformation.title,
    id: itemInformation.id,
    category: itemInformation.category,
    date: itemInformation.date,
    details: itemInformation.details,
    owner: itemInformation.owner,
    price: itemInformation.price,
    imageurls: itemInformation.imageurls,
  };

  const handlePicSelection = (num: Number) => {
    switch (num) {
      case 0:
        setSelectedPicture(itemInformation.imageurls[0]);
        break;
      case 1:
        if (itemInformation.imageurls[1] && itemInformation.imageurls[1] !== "") {
          setSelectedPicture(itemInformation.imageurls[1]);
        } else {
          setSelectedPicture(noImageIcon);
        }
        break;
      case 2:
        if (itemInformation.imageurls[2] && itemInformation.imageurls[2] !== "") {
          setSelectedPicture(itemInformation.imageurls[2]);
        } else {
          setSelectedPicture(noImageIcon);
        }
        break;
      default:
        setSelectedPicture(itemInformation.imageurls[0]);
        break;
    }
  };

  return (
    <div className="flex flex-row flex-wrap w-[100%] h-[100%]">
      <div className="w-1/2 min-w-[350px] h-1/2 md:h-[100%]  bg-white rounded-md shadow-md flex-col p-1">
        <div className="w-[100%] h-[75%]">
          <div className="flex justify-center mb-1 bg-sky-300">
            <p>{itemInformation.title}</p>
            <p className="text-xl font-bold absolute left-5">{itemInformation.price}€</p>
          </div>
          <div className="w-full h-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src={selectedPicture} className="object-cover w-full h-full"></img>
          </div>

          <div className="flex flex-row  h-[18%] md:h-[13%] mt-1 justify-center gap-x-2">
            {itemInformation.imageurls.map((item, key) => {
              return (
                <div
                  key={key}
                  onClick={() => handlePicSelection(key)}
                  className="w-[60px] md:w-[80px] h-full"
                >
                  <img src={item} className="w-full h-full"></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-1/2 min-w-[350px] h-1/2 md:h-[100%]">
        <div className="flex flex-col p-1">
          <span className="p-1 self-center">Lisätietoja</span>
          <div className="w-[100%] min-h-[150px] bg-white flex justify-center shadow-md p-2 rounded-md">
            <div className="w-full h-full min-h-[170px] md:h-[350px] p-2">
              <p>{itemInformation.details}</p>
            </div>
          </div>

          <div className="w-[100%] mt-2 flex justify-end bg-white  shadow-md rounded-md">
            <Button size={"sm"} onClick={() => addItemToCart(itemobj)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;
