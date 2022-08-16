import {Footer} from "flowbite-react";
import logo from "../../images/NK_logo.png";
interface FooterSimpleProps {}

const FooterSimple: React.FunctionComponent<FooterSimpleProps> = () => {
  return (
    <Footer container={true}>
      <div className="w-[90%] text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="/" src={logo} alt="Nettikirppari Logo" name="Nettikirppari" />
          <Footer.LinkGroup>
            <Footer.Link href="#">Tietoja</Footer.Link>
            <Footer.Link href="#">Käyttöehdot</Footer.Link>
            <Footer.Link href="#">Ota yhteyttä</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by=" www.nettikirppari.com" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterSimple;
