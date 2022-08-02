interface Props {
  title: string;
  price: string;
  date: string;
  imageurls: Array<any>;
}

const Item: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "2px",
      }}
    >
      <div style={{ height: "100%", width: "185px" }}>
        <img
          src={props.imageurls[0]}
          alt="..."
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "10px",
        }}
      >
        <h2>{props.title}</h2>
        <h1>{props.price}€</h1>
      </div>
      <div
        style={{
          height: "100%",
          width: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <p>{props.date}</p>
        <p>{props.date}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Item;
