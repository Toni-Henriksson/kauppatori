import React, {useState, useEffect} from "react";

import CarouselComponent from "../../components/CarouselComponent";
import Item from "../../components/Item";
import {listedItem} from "../../interfaces/interfaces";
import {Button} from "flowbite-react";

import axios from "axios";
import ModalComponent from "../../components/modalcomponents/ModalComponent";
import ShoppingCart from "../../components/shoppingcart/ShoppingCart";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  const [items, setItems] = useState<listedItem[]>([]);
  const [next, setNext] = useState(0);

  const [visible, setVisible] = useState(false);
  const [modalItem, setModalItem] = useState({
    title: "",
    price: "",
    details: "",
    date: "",
    category: "",
    owner: "",
    imageurls: [],
  });
  const [toggleCart, setToggleCart] = useState(false);

  const postsPerPage = 6;

  useEffect(() => {
    fetchItemData(next);
  }, []);

  const fetchItemData = async (next: number) => {
    axios.get("http://localhost:3001/getItems", {params: {next}}).then((response) => {
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

  const modalHandler = (item: any) => {
    setModalItem(item);
    setVisible(!visible);
  };

  return (
    <div className="w-[97%]">
      <ShoppingCart toggle={toggleCart}></ShoppingCart>

      <Button onClick={() => setToggleCart(!toggleCart)}></Button>
      <div className="flex justify-center">
        <CarouselComponent></CarouselComponent>
      </div>
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
      <div className="flex justify-center my-5">
        <Button.Group>
          <Button color="gray">Elektroniikka</Button>
          <Button color="gray">Vaatetus</Button>
          <Button color="gray">Koti ja asuminen</Button>
          <Button color="gray">Muut</Button>
        </Button.Group>
      </div>
      <div className="flex justify-center my-5">
        <div className="flex justify-center">
          <div className="w-[95%] max-w-5xl border-2 rounded-lg flex flex-wrap gap-y-3 justify-center content-start p-2 shadow-sm">
            {items?.map((item, id) => {
              return (
                <div
                  key={id}
                  className="w-[80%]  min-w-[350px] h-[185px] border-2 rounded-lg shadow-sm"
                  onClick={() => {
                    modalHandler(item);
                  }}
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
          <Button outline={true} color="light" onClick={() => handlePagination(-postsPerPage)}>
            Edellinen sivu
          </Button>
        </div>
        <div className="ml-5">
          <Button color="light" onClick={() => handlePagination(postsPerPage)}>
            Seuraava sivu
          </Button>
        </div>
      </div>
      <div className="w-fit">
        <ModalComponent
          visible={visible}
          setVisible={setVisible}
          content={modalItem}
        ></ModalComponent>
      </div>
    </div>
  );
};

export default Home;
