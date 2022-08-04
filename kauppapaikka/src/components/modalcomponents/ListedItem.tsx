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
    <div>
      <h1>{itemInformation.title}</h1>
      <h1>{itemInformation.price}</h1>
      <h1>{itemInformation.owner}</h1>
      <h1>{itemInformation.category}</h1>
      <h1>{itemInformation.imageurls[0]}</h1>
    </div>
  );
};

export default ListedItem;
