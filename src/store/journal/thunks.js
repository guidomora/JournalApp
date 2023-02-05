import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    // con el getState obtengo todo el estado de la app, por lo que puedo sacar el
    // uid
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    // referencia para insertar la nueva nota
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    // Le creamos el id a la nota
    newNote.id = newDoc.id;

    // newNote es el payload
    dispatch(addEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("el UID no existe");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    // Como viene un id en note, tenemos que removerlo
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    // referencia del doc
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    // impactando firebase, el merge serviria como para unir ej: si habia campos que no
    // existian, los une
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    // para poner a la app en un estado de carga y bloquear todo
    dispatch(setSaving());
    // await fileUpload (files[0])

    const fileUploadPromises = [];

    for (const file of files) {
      // Le decimos a este arregl de promesas que empiece a almacenarlas ahi
      fileUploadPromises.push(fileUpload(file));

      const photosUrls = await Promise.all(fileUploadPromises);
      console.log(photosUrls);

      dispatch(setPhotosToActiveNote(photosUrls));
    }
  };
};
