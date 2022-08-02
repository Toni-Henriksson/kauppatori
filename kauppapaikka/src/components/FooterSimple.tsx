import { Footer } from "flowbite-react";
interface FooterSimpleProps {}

const FooterSimple: React.FunctionComponent<FooterSimpleProps> = () => {
  return (
    <Footer container={true}>
      <div className="w-[90%] text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://kauppapaikka.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Kauppapaikka Logo"
            name="Kauppapaikka"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Tietoja</Footer.Link>
            <Footer.Link href="#">Käyttöehdot</Footer.Link>
            <Footer.Link href="#">Ota yhteyttä</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by=" Kauppapaikka.com" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterSimple;
