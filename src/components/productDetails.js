import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Products from "./products";
import { CartContext } from "./context";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Divider,
  Grid,
  Image,
  Rating,
  Header,
  Statistic,
  Segment,
  Input,
  Label,
} from "semantic-ui-react";

function ProductDetails() {
  const [productDet, setProductDet] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((el) => setProductDet(el.data))
      .catch((err) => console.log(err));
  }, []);
  const rate = Math.round(productDet?.rating?.rate);

  const { carts, addCart } = useContext(CartContext);
  console.log(carts);
  return (
    <Segment>
      <Grid columns={2} stackable textAlign="left">
        <Divider vertical></Divider>

        <Grid.Row>
          <Grid.Column>
            <Image src={productDet.image} />
          </Grid.Column>
          <Grid.Column>
            <Header size="large">{productDet.title}</Header>
            <Rating icon="star" rating={rate} maxRating={5} /> ( Reviews:
            {productDet?.rating?.count})
            <br />
            <Statistic>
              <Statistic.Value style={{ textTransform: "none" }}>
                Price: ₹{productDet.price}
              </Statistic.Value>
            </Statistic>
            <Header size="medium">Description :</Header>
            <p>{productDet.description}</p>
            <Button
              color="red"
              size="large"
              onClick={() => {
                addCart({
                  id: productDet.id,
                  image: productDet.image,
                  title: productDet.title,
                  price: productDet.price,
                });
                navigate("/cart");
              }}
            >
              Add to Cart
            </Button>
            {/* <Input labelPosition="right" type="text" placeholder="Amount">
              <Label basic>-</Label>
              <input />
              <Label basic>+</Label>
            </Input> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default ProductDetails;
