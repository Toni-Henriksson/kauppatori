import { useState, useEffect } from "react";

import CarouselComponent from "../../components/CarouselComponent";
import Item from "../../components/Item";
import { listedItem } from "../../interfaces/interfaces";
import { Button, Pagination } from "flowbite-react";

import axios from "axios";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  const [items, setItems] = useState<listedItem[]>([]);
  const [next, setNext] = useState(0);

  const postsPerPage = 6;

  useEffect(() => {
    fetchItemData(next);
  }, []);

  const fetchItemData = async (next: number) => {
    axios
      .get("http://localhost:3001/getItems", { params: { next } })
      .then((response) => {
        setItems(response.data);
      });
  };

  const handlePagination = (numOfPages: number) => {
    let i = next + numOfPages;
    if (i >= 0) {
      setNext(i);
      fetchItemData(i);
    }
  };

  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <div className="flex justify-center mt-5">
        <Button
          color="dark"
          onClick={() => {
            window.location.href = "newlisting";
          }}
        >
          {" "}
          JÄTÄ ILMOITUS{" "}
        </Button>
      </div>
      <div className="flex justify-center mt-5">
        <Button.Group>
          <Button color="gray">Elektroniikka</Button>
          <Button color="gray">Vaatetus</Button>
          <Button color="gray">Koti ja asuminen</Button>
          <Button color="gray">Muut</Button>
        </Button.Group>
      </div>
      <div className="flex justify-center my-5">
        <div className="w-[95%] flex justify-center">
          <div className="max-w-5xl min-w-[350px] border-2 rounded-lg flex flex-wrap gap-x-6 gap-y-6 justify-center content-start p-2">
            {items?.map((item, id) => {
              return (
                <div
                  key={id}
                  className="w-[80%]  min-w-[340px] h-[185px] border-2 rounded-lg"
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
      </div>
      <div className="flex justify-center mb-5">
        <div className="mr-5">
          <Button
            outline={true}
            color="light"
            onClick={() => handlePagination(-postsPerPage)}
          >
            Edellinen sivu
          </Button>
        </div>
        <div className="ml-5">
          <Button color="light" onClick={() => handlePagination(postsPerPage)}>
            Seuraava sivu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
