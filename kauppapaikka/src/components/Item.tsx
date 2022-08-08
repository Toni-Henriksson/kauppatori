interface Props {
  title: string;
  price: string;
  date: string;
  details: string;
  imageurls: Array<any>;
}

const Item: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div
      style={{height: "100%", width: "100%", display: "flex", flexDirection: "row", padding: "2px"}}
    >
      <div className="w-[250px] h-[180px]">
        <img
          src={props.imageurls[0]}
          alt="..."
          className="object-cover w-[100%] h-[180px] md:h-[98%]"
        />
      </div>

      <div className="w-[100%] h-[100%] flex flex-col p-1">
        <div className="w-full flex flex-row">
          <div className="w-3/4 h-1/4">
            <p className="font-md text-md md:text-lg">{props.title}</p>
          </div>
          <div className="w-1/4">
            <p className="font-bold text-md md:text-xl">{props.price}€</p>
          </div>
        </div>

        <div className="w-full h-3/4">
          <div className="w-full h-full bg-slate-100 flex flex-wrap">
            <p className="text-sm md:text-lg">{props.details}</p>
          </div>
        </div>

        <div className="w-full flex flex-row">
          <div className="w-2/4">
            <p className="text-xs">{props.date}</p>
          </div>
          <div className="w-2/4">
            <p className="text-xs">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
