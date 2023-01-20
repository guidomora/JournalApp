import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import NothingSelectedView from "../views/NothingSelectedView";

const JournalPage = () => {
  // Typography le agrega la tipografia al elemento
  // la prop variant hace que le pasemos que tipo de etiqueta queremos que sea pq sino
  // por defecto es un <p>a

  // MailOutline seria un icono  <MailOutline />
  return (
    <>
      <JournalLayout>
        <NothingSelectedView />
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>
        {/* <NoteView /> */}
      </JournalLayout>
    </>
  );
};

export default JournalPage;
