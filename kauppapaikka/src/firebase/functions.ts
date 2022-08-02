import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase'
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'kauppapaikka.page.link'
};

export const register = async(email: string, password: string) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        if(user){
            sendVerification();
            return user.user.email;
        }
    }catch(error: any){
        console.log(error.message);
    }
}

async function sendVerification(){
    var user:any = auth.currentUser;
    sendEmailVerification(user,actionCodeSettings).then((res)=>{
        console.log("verification sent!")
    }).catch((err)=>{
        console.log("error: " + err)
    })
}

export const login = async (email: string, password: string) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
    }catch(error: any){
        console.log(error.message);
    }
}; 

export const logout = async () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    try {
        await signOut(auth);
        console.log("Logged out successfully.")
        window.location.href = "/";
    } catch (error) {
        console.log("Error loggin out: " + error)
    }
};
