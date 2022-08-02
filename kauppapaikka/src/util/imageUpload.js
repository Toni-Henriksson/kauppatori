import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';

/*export const imageUpload = async (images, setImages) => {
    const tempArr = []
    for (let i = 0; i < images.length; i++) {
        let storage = getStorage();
        let imageRef = ref(storage, "/images");

        await uploadBytesResumable(imageRef, images[i])
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    tempArr.push(url);
                    if (tempArr.length === images.length) {
                        return
                    }
                });
            }).catch((error) => {
                console.log('Upload failed', error);
            });
    }
    setImages(tempArr);
}*/

export async function imgUp(images) {
    const tempArr = []
    let promise = new Promise((resolve, reject) => {
        for (let i = 0; i < images.length; i++) {
            let storage = getStorage();
            let imageRef = ref(storage, "/images");

            uploadBytesResumable(imageRef, images[i])
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        tempArr.push(url);
                        if (tempArr.length === images.length) {
                            resolve(tempArr);
                        }
                    });
                }).catch((error) => {
                    console.log('Upload failed', error);
                });
        }
    });
    let result = await promise;
    return result;
}