import {useState} from "react";
import noImageIcon from "../../images/noimage.png";

interface ListedItemProps {
  itemInformation: {
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
    <div className="flex flex-row flex-wrap w-[100%] h-[100%] border-2">
      <div className="w-[60%] min-w-[350px] h-[60%] md:h-[100%]">
        <div className="w-[90%] h-[85%] m-1">
          <div className="w-[350px] h-[350px] md:w-[98%] md:h-[98%] m-1 rounded flex justify-center bg-slate-100">
            <img src={selectedPicture} className="object-cover w-[100%] h-[350px] md:h-[98%]"></img>
          </div>
        </div>

        <div className="flex flex-row w-[100%] h-[100px] justify-center gap-2">
          <div
            onClick={() => handlePicSelection(0)}
            className="max-w-[100px] w-[100px] h-full flex justify-center items-center border-2 rounded p-1 bg-slate-100"
          >
            {itemInformation.imageurls[0] ? (
              <img
                src={itemInformation.imageurls[0]}
                className="w-full h-full object-scale-down"
              ></img>
            ) : (
              <h1>X</h1>
            )}
          </div>

          <div
            onClick={() => handlePicSelection(1)}
            className="max-w-[100px] w-[100px] h-full flex justify-center items-center  border-2 rounded p-1 bg-slate-100"
          >
            {itemInformation.imageurls[1] ? (
              <img
                src={itemInformation.imageurls[1]}
                className="w-full h-full object-scale-down"
              ></img>
            ) : (
              <h1>X</h1>
            )}
          </div>

          <div
            onClick={() => handlePicSelection(2)}
            className="max-w-[100px] w-[100px] h-full flex justify-center items-center  border-2 rounded p-1 bg-slate-100"
          >
            {itemInformation.imageurls[2] ? (
              <img
                src={itemInformation.imageurls[2]}
                className="w-full h-full object-scale-down"
              ></img>
            ) : (
              <h1>X</h1>
            )}
          </div>
        </div>
      </div>

      <div className="w-[40%] min-w-[350px] h-[40%] md:h-[100%]">
        <div className="flex flex-row p-2">
          <div className="w-[40%]">
            <p className="text-md font-medium">{itemInformation.title}</p>
            <p className="text-lg font-bold">{itemInformation.price}€</p>
          </div>
          <div className="w-[60%]">
            <div className="w-full h-[100px] md:h-[350px] border-2 bg-slate-100 p2">
              <p>{itemInformation.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;
