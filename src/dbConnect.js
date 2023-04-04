import { firestore, initializeApp } from "firebase-admin"

export { initializeApp, cert } from "firebase-admin/app";
import {firestore, getFirestore} from "firebase-admin/firestore";

import { credentials } from "firebase-admin/app";

initializeApp( {
    credential: cert(credentials)
}); 

export const db = getFirestore(); 