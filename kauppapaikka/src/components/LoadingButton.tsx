import { Button, Spinner } from "flowbite-react";
interface LoadingButtonProps {}

const LoadingButton: React.FunctionComponent<LoadingButtonProps> = () => {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="spnr" />
        <span className="pl-3">Ladataan...</span>
      </Button>
    </div>
  );
};

export default LoadingButton;
