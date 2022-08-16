import {Button} from "flowbite-react";
import React from "react";
import ListedItem from "./ListedItem";

interface ModalComponentProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    id: string;
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
    <div className="fixed left-0 top-10 w-[100%] h-[100%] bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex-column justify-center bg-gray-200 p-2 rounded w-[95%] h-[80%] max-w-[1200px] md:h-[800px] relative ">
        <ListedItem itemInformation={content}></ListedItem>
        <div className="absolute top-1 right-1">
          <Button
            color={"dark"}
            size={"sm"}
            pill={true}
            onClick={() => {
              setVisible(!visible);
            }}
          >
            ✖
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
