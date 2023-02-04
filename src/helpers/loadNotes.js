import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid ="") => {
    if (!uid) throw new Error("el UID no existe");
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    // como no nostraia el id creamos un array, le pusheamos un objeto que tiene el id y el resto
    // de la info de los documentos
    const notes = []
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data()})
    })
    console.log(notes)
    return notes
}