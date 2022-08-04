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

const ListedItem: React.FunctionComponent<ListedItemProps> = ({
  itemInformation,
}) => {
  return (
    <div className="flex flex-row flex-wrap w-[100%] h-[100%] border-2">
      <div className="w-[50%] min-w-[350px] h-[60%] md:h-[100%]">
        <div className="w-full h-[80%]">
          <div className="w-[330px] h-[330px] md:w-[98%] md:h-[98%] m-1 border-2 rounded">
            <img src={itemInformation.imageurls[0]}></img>
          </div>
        </div>

        <div className="flex flex-row w-full h-[20%]">
          <div className="w-1/3 h-full flex justify-center items-center">
            {itemInformation.imageurls[0] ? (
              <img
                src={itemInformation.imageurls[0]}
                className="w-full h-full object-scale-down"
              ></img>
            ) : (
              <h1>X</h1>
            )}
          </div>

          <div className="w-1/3 h-full flex justify-center items-center  border-2 rounded">
            {itemInformation.imageurls[1] ? (
              <img
                src={itemInformation.imageurls[1]}
                className="w-full h-full object-scale-down"
              ></img>
            ) : (
              <h1>X</h1>
            )}
          </div>

          <div className="w-1/3 h-full flex justify-center items-center  border-2 rounded">
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

      <div className="w-[50%] min-w-[350px] h-[40%] md:h-[100%]">
        <div>
          <p>{itemInformation.title}</p>
          <p>{itemInformation.price}</p>
          <p>{itemInformation.owner}</p>
          <p>{itemInformation.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;
