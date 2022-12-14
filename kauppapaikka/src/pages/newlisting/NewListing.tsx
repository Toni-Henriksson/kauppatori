import {useState, ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
import React from "react";

import axios from "axios";
import {getAuth} from "firebase/auth";
import {imgUp} from "../../util/imageUpload";
import {v4 as uuidv4} from "uuid";
import {getDate} from "../../util/helperfunctions";

import {Button, TextInput, Label, Checkbox, Textarea, Select, FileInput} from "flowbite-react";
import LoadingButton from "../../components/static-ui-elements/LoadingButton";

import {checkStrongIdentification, checkEmailVerified} from "../../util/userVerificationFunctions";

interface NewListingProps {
  userEmail: string;
}

const NewListing: React.FunctionComponent<NewListingProps> = ({userEmail}) => {
  let navigation = useNavigate();
  const [images, setImages]: any = useState([]);
  const [imgUrls, setImgUrls] = useState([]);
  const [imageInput, setImageInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    category: "",
    price: "",
    info: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleImages = () => {};

  const submitForm = async () => {
    setLoading(true);
    let verified = checkStrongIdentification(getAuth().currentUser?.uid);
    let verifiedEmail = checkEmailVerified();

    let urls = await imgUp(images).then((response) => {
      let id = uuidv4();
      if (verified && verifiedEmail) {
        axios
          .post("http://localhost:3001/createListing", {
            id: id,
            title: state.title,
            category: state.category,
            price: state.price,
            details: state.info,
            date: getDate(),
            owner: userEmail,
            imageurls: response,
          })
          .then(() => {
            navigation("/");
            setLoading(false);
          });
      }
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="max-w-sm md:max-w-lg mt-20 p-20 space-y-4 border-solid border-2 rounded border-sky-500">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Tuotteen otsikko" />
            </div>
            <TextInput
              id="otsikko"
              type="text"
              name="title"
              placeholder="Kuvaava otsikko.."
              required={true}
              onChange={handleChange}
            />
          </div>

          <div id="select">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Tuotteen kategoria" />
            </div>
            <Select
              id="category"
              required={true}
              name="category"
              onChange={(e) =>
                setState({
                  ...state,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option></option>
              <option>Elekroniikka</option>
              <option>Vaatteet</option>
              <option>Koti ja asuminen</option>
              <option>Muut</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="hinta" value="Hinta" />
            </div>
            <div className="flex-row">
              <TextInput
                id="hinta"
                type="text"
                required={true}
                addon="???"
                name="price"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="info" value="Lis??tietoja" />
              </div>
              <Textarea
                id="info"
                placeholder="Lis??tietoja myyt??v??st?? tuotteesta.."
                required={true}
                rows={4}
                name="info"
                onChange={(e) =>
                  setState({
                    ...state,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              Hyv??ksyn{" "}
              <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                k??ytt??ehdot
              </a>
            </Label>
          </div>
          <div id="fileUpload">
            <div className="mb-2 block">
              <Label value="Lataa kuvia" htmlFor="multiple_files" />
            </div>
            <FileInput
              id="multiple_files"
              helperText="JPG, PNG"
              typeof="file"
              onChange={(e) => {
                var files = e.target.files;
                setImages(...images, files);
              }}
            />
          </div>
          {loading ? (
            <LoadingButton></LoadingButton>
          ) : (
            <div>
              <Button
                type="button"
                onClick={() => {
                  submitForm();
                }}
              >
                Luo ilmoitus
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewListing;
