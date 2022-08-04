import { Button } from "flowbite-react";
import React from "react";
import ListedItem from "./ListedItem";

interface ModalComponentProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    title: string;
    price: string;
    details: string;
    date: string;
    category: string;
    owner: string;
    imageurls: Array<string>;
  };
}

const ModalComponent: React.FunctionComponent<ModalComponentProps> = ({
  visible,
  content,
  setVisible,
}) => {
  if (!visible) return null;
  return (
    <div className="fixed left-0 top-0 w-screen h-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded w-[50%] min-w-[300px] h-[50%]">
        <h1>Modal</h1>
        <ListedItem itemInformation={content}></ListedItem>
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Sulje
        </Button>
      </div>
    </div>
  );
};

export default ModalComponent;
