import { Carousel } from "flowbite-react";

interface Props {}

const CarouselComponent: React.FunctionComponent<Props> = () => {
  return (
    <>
      <div className="flex justify-center w-[350px] md:w-[800px] 2xl:w-[1500px]">
        <div className="w-[100%] h-56 sm:h-64 xl:h-80 2xl:h-96 m-3">
          <Carousel slideInterval={10000}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
