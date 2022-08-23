import { useEffect } from "react";
import { GridComponent } from "./components/GridComponent";
import NavigationComponent from "./components/NavigationComponent";
import { getPhotos } from "./services/photoService";
import { useDispatch, useSelector } from "react-redux";
import { photoActions } from "./redux/photos";
import { Container } from "@mui/material";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.photo);

  useEffect(() => {
    getPhotos(state.page, state.searchWord)
      .then((res) => {
        dispatch(photoActions.setPhotos(res.hits));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <Container className="container" maxWidth="md">
      <br />
      <br />
      <br />
      <br />
      <NavigationComponent></NavigationComponent>
      <br />
      <br />
      <br />
      <GridComponent></GridComponent>
    </Container>
  );
}

export default App;
