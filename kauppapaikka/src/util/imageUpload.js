import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';

// Takes images as input and returns an array containing hosted urls for given images. (ready to be used as img src)
export async function imgUp(images) {
    const tempArr = []
    let promise = new Promise((resolve, reject) => {
        for (let i = 0; i < images.length; i++) {
            let storage = getStorage();
            let fileName = "ListedItemImage-" + uuidv4();

            let storageRef = ref(storage, `${"images"}/${fileName}`);


            uploadBytesResumable(storageRef, images[i])
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