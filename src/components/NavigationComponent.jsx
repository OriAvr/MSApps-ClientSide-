import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { photoActions } from "../redux/photos";

const NavigationComponent = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState("");
  const handleNext = () => {
    dispatch(photoActions.nextPage());
  };

  const handlePrevious = () => {
    dispatch(photoActions.previousPage());
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchWord) {
        dispatch(photoActions.setSearchWord(searchWord));
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchWord]);

  const handleSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handlePrevious}>
        PREV
      </Button>
      <TextField
        variant="outlined"
        color="secondary"
        label="Search"
        onChange={handleSearchWord}
        sx={{
          width: { sm: 200, md: 400 },
        }}
      ></TextField>
      <Button variant="contained" color="secondary" onClick={handleNext}>
        NEXT
      </Button>
    </div>
  );
};
export default NavigationComponent;
