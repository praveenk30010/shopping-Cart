import React, { useState, createContext, useReducer } from "react";

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "ADD_CART": {
      let flag = false;
      console.log("action", action);
      let ncart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          flag = true;
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      console.log("ncart", ncart);
      console.log("flag", flag);
      console.log("{ cart: [...ncart, { ...action.payload, count: 1 }] }", {
        cart: [...ncart, { ...action.payload, count: 1 }],
      });
      if (flag) {
        return { cart: [...ncart] };
      } else {
        return { cart: [...ncart, { ...action.payload, count: 1 }] };
      }
    }
    case "DELETE_CART": {
      let ncart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        })
        .filter((el) => el.count > 0);
      return { cart: [...ncart] };
    }
    default:
      throw new Error();
  }
}

export const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [search, setSearch] = useState("");

  // Actions
  function deleteCart(id) {
    dispatch({
      type: "DELETE_CART",
      payload: id,
    });
  }

  function addCart(product) {
    console.log("addcart function", product);
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  }

  return (
    <CartContext.Provider
      value={{
        carts: state.cart,
        addCart,
        deleteCart,
        search,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
