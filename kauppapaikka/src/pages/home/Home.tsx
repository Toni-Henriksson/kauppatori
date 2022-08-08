import React, {useState, useEffect, useContext} from "react";

import CarouselComponent from "../../components/static-ui-elements/CarouselComponent";
import {listedItem} from "../../interfaces/interfaces";
import {Button} from "flowbite-react";

import axios from "axios";
import ModalComponent from "../../components/modalcomponents/ModalComponent";
import ShoppingCart from "../../components/ShoppingCart";
import CartContext from "../../context/CartContext";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  // Items listed for sale
  const [items, setItems] = useState<listedItem[]>([]);
  const [next, setNext] = useState(0);
  const postsPerPage = 8;

  // ShoppingCart states
  const {toggleState, toggleCart} = useContext(CartContext);

  // Modal for full item details
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
    <div className="bg-gray-100">
      <ShoppingCart toggle={toggleState} setToggle={toggleCart}></ShoppingCart>
      <div className="flex justify-center">
        <CarouselComponent></CarouselComponent>
      </div>
      <div className="flex justify-center mt-5 bg-gray-100">
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
      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto py-15 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-center my-5">
            <Button.Group>
              <Button color="gray">Elektroniikka</Button>
              <Button color="gray">Vaatetus</Button>
              <Button color="gray">Koti ja asuminen</Button>
              <Button color="gray">Muut</Button>
            </Button.Group>
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items?.map((product, id) => (
              <a
                key={id}
                onClick={() => {
                  modalHandler(product);
                }}
                className="group shadow-sm"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageurls[0]}
                    alt={product.title}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 ml-2 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 ml-2 text-lg font-medium text-gray-900">{product.price}€</p>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
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
