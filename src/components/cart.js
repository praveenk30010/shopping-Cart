import React, { useState, useContext } from "react";
import {
  Grid,
  Image,
  Header,
  Statistic,
  Button,
  Input,
} from "semantic-ui-react";
import { CartContext } from "./context";
let Cart = () => {
  const { carts, addCart, deleteCart } = useContext(CartContext);
  console.log(carts);
  return (
    <div>
      <h1>Cart</h1>

      <div className="cartMain">
        {carts.map((el) => {
          return (
            <Grid>
              <Grid.Column width={4}>
                <Image size="small" src={el.image} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header size="medium">{el.title}</Header>
                <h1> Price: ₹{el.price}</h1>
                <div>
                  <Button color="grey" onClick={() => deleteCart(el.id)}>
                    -
                  </Button>
                  <Input value={el.count}></Input>
                  <Button
                    color="grey"
                    onClick={() =>
                      addCart({
                        id: el.id,
                        image: el.image,
                        title: el.title,
                        price: el.price,
                      })
                    }
                  >
                    +
                  </Button>
                </div>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
