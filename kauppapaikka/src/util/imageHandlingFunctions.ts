import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

/*interface imgArr{

}

export const UploadData = async (images : Array<[]>, userID:string) => {
    let storage = getStorage();
    const tempArr:any= [];

    for(let i = 0; i < images.length; i++){
        let fileName = "image";
        let itemID = uuidv4();
        let imageRef = ref(storage, `${userID}/${itemID}/${fileName}`);
        let img = await fetch(images[i].uri);
        let bytes = await img.blob();

        await uploadBytesResumable(imageRef, bytes)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                tempArr.push(url)

                if(tempArr.length === images.length){
                    
                }
            });
        }).catch((error) => {
            console.log('Upload failed', error);
        });
    }
} */