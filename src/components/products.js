import React, { useState, useEffect, useContext } from "react";
import { Grid, Segment, GridColumn, Image } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "./context";
import { PageContext } from "./HomePage";

function Products() {
  const [product, setProduct] = useState([]);
  const [dsearch, setDsearch] = useState([]);

  const { carts, search } = useContext(CartContext);

  const { category } = useContext(PageContext);

  // console.log(props);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((el) => {
        // JSON.stringify(el);
        // console.log(el.data);
        setProduct(el.data);
        setDsearch(el.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  useEffect(() => {
    let searchPr = product.filter((el) => {
      let searchLr = search.toLowerCase();

      if (el.title.toLowerCase().search(searchLr) > -1) {
        return el;
      }
    });

    setDsearch(searchPr);
  }, [search]);

  return (
    <Grid columns={4} className="mainProduct">
      {dsearch.map((val) => {
        return (
          <Grid.Column>
            <Link to={"/product-details/" + val.id}>
              <Segment className="productSegment">
                <div className="productImage">
                  <Image src={val.image} size="small" centered />
                </div>
                <h4 className="productTitle">{val.title}</h4>
              </Segment>
            </Link>
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default Products;
