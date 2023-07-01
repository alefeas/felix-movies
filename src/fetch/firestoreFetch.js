import { where, query, collection, getDocs, getDoc, doc } from "@firebase/firestore";
import { db } from "../config/firebase.js";

export const firestoreFetchCategory = async (idCategory) => {
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

export const firestoreFetchItem = async (idItem) => {
    const docRef = doc(db, 'media', idItem)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists) {
        return {
            id: idItem,
            ...docSnap.data()
        }   
    } else {
        console.log('No such document!');
    }
}