import React, { useContext } from "react";
import { Input, Menu, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "./context";

function Menubar() {
  const { setSearch } = useContext(CartContext);

  return (
    <div>
      <Menu icon>
        <Menu.Item
          name="home"
          className="home"
          // active={activeItem === "home"}
          // onClick={this.handleItemClick}
        >
          <nav>
            <Link to="/">{<Icon name="home" size="large" />}</Link>
          </nav>
        </Menu.Item>
        <Menu.Menu>
          <Menu.Item
            name="cart"
            className="cart"
            // active={activeItem === "messages"}
            // onClick={this.handleItemClick}
          >
            <Link to="/cart">
              {<Icon className="cartIcon" name="shopping cart" size="large" />}
            </Link>{" "}
            |{" "}
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item className="searching">
          <Input
            onChange={(e, dt) => setSearch(dt.value)}
            icon="search"
            placeholder="Search..."
            className="searchinput"
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            className="profile"
            name="Profile"
            // active={activeItem === "friends"}
            // onClick={this.handleItemClick}
          >
            <nav>
              <Link to="/profile">{<Icon name="user" size="large" />}</Link>
            </nav>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Menubar;
