import { createSlice } from "@reduxjs/toolkit";
import { startLoadingNotes } from "./thunks";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    // para saber si estamos guardando
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    imageUrls: []
    // active: {
    //     id:"ABC123",
    //     title: "",
    //     body: "",
    //     date: 1234567,
    //     imageUrls: [],
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addEmptyNote: (state, action) => {
      // Al estado le sumamos la nueva nota (el payload tiene contiene la nota)
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        // suponemos que el payload va a ser igual a una nota o la nota actualizada
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      // mensaje de nota actualizada
      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },

    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },

    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote,
} = journalSlice.actions;
