import { where, query, collection, getDocs } from "@firebase/firestore";
import { db } from "../config/firebase.js";

export const firestoreFetch = async (idCategory) => {
    let q
    if(idCategory) {
        q = query(collection(db, 'media'), where('category', '==', idCategory))
    } else {
        q = query(collection(db, 'media'))
    }
    const querySnapshot = await getDocs(q)
    const dataFromFireStore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFireStore
}