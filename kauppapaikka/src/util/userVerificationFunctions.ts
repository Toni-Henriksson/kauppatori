import { getAuth } from "firebase/auth";

export function checkStrongIdentification(uid: string | undefined): boolean{
    // TODO: Logic for checking strong identification
    return true;
}

export const checkEmailVerified = (): boolean => {
    let user:any = getAuth().currentUser;
    let verified : boolean = user.emailVerified;
    console.log("user verified: " + verified);
    return verified;
}