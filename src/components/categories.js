import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { PageContext } from "./HomePage";

function Categories(props) {
  const [cat, setCat] = useState([]);
  const { setCategory } = useContext(PageContext);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((el) => {
        setCat(el.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="catg-button">
      {cat.map((val) => (
        <Button onClick={() => setCategory(val)}>{val}</Button>
      ))}
    </div>
  );
}

export default Categories;
