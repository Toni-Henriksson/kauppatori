import { useState, useEffect } from "react";

import CarouselComponent from "../../components/CarouselComponent";
import Item from "../../components/Item";
import { listedItem } from "../../interfaces/interfaces";
import { Button, Pagination } from "flowbite-react";

import axios from "axios";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  const [items, setItems] = useState<listedItem[]>([]);

  useEffect(() => {
    fetchItemData();
  }, []);

  const fetchItemData = async () => {
    axios.get("http://localhost:3001/getItems", {}).then((response) => {
      setItems(response.data);
    });
  };

  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <div className="flex justify-center mt-5">
        <Button.Group>
          <Button color="gray">Elektroniikka</Button>
          <Button color="gray">Vaatetus</Button>
          <Button color="gray">Koti ja asuminen</Button>
          <Button color="gray">Muut</Button>
        </Button.Group>
        <div className="ml-10">
          <Button
            gradientDuoTone="purpleToBlue"
            onClick={() => {
              window.location.href = "newlisting";
            }}
          >
            {" "}
            Jätä ilmoitus{" "}
          </Button>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <div className="w-3/4 max-w-5xl h-3/4 border-2 flex flex-wrap gap-x-6 gap-y-6 justify-center">
          {items?.map((item, id) => {
            return (
              <div
                key={id}
                style={{ width: "210px", border: "2px solid gray" }}
              >
                <Item
                  title={item.title}
                  price={item.price}
                  date={item.date}
                  imageurls={item.imageurls}
                ></Item>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Pagination
          currentPage={1}
          totalPages={100}
          onPageChange={() => console.log("Page change")}
        />
      </div>
    </div>
  );
};

export default Home;
