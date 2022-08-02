interface Props {
  title: string;
  price: string;
  date: string;
  imageurls: Array<any>;
}

const Item: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "70%" }}>
        <img
          src={props.imageurls[0]}
          alt="..."
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ height: "30%" }}>
        <h1>{props.title}</h1>
        <h1>{props.price}</h1>
        <h1>{props.date}</h1>
      </div>
    </div>
  );
};

export default Item;
