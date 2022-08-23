import { Grid } from "@mui/material";
import "./photoComponent.css";

export const PhotoComponent = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <img src={props.src} alt="alt" key={props.id} />
    </Grid>
  );
};
