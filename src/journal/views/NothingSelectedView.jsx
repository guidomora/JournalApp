import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

// Las views siguen siendo componentes pero que no ocupan toda la pantalla de la pagina
// sino un pedazo, no uno chico.

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <Grid item xs={12} sx={{ fontSize: 100, color: "white" }}>
        <StarOutline sx={{ fontSize: 100}}/>
      </Grid>
      <Grid item xs={12}>
      <Typography color={"white"} variant="h5">Sleccione o cree una nota</Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
