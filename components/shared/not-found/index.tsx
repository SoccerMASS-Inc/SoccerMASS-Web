"use client";

import styles from "./styles.module.scss";
import { Error } from "@mui/icons-material";
import { IconButton, Typography, Stack } from "@mui/material";

export default function NotFound({ height }: any) {
  return (
    <Stack spacing={2} alignItems="center" className={styles["not-found"]} style={{ height: height || "calc(var(--visibleScreen) - var(--headerHeight))" }}>
      <IconButton sx={{ fontSize: "7em" }}>
        <Error fontSize="inherit" />
      </IconButton>
      <Typography component="h3" fontSize="2em">
        Data Not Found
      </Typography>
      <Typography color="text.secondary">Sorry, the requested data could not be found.</Typography>
    </Stack>
  );
}
