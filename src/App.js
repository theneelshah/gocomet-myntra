import React, { Component } from "react";
import {
  Breadcrumb,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./App.css";
import heart from "./assets/heart.png";
import logo from "./assets/myntra.png";
import search from "./assets/search.png";
import bag from "./assets/shopping-bag.png";
import profile from "./assets/user.png";
import data from "./data";

class App extends Component {
  state = {
    searchText: "",
    product: false,
    productDetails: {},
  };

  onFocus = () => {
    console.log("onFocus");
  };

  onBlur = () => {
    console.log("onBlur");
  };

  onSearch = (e) => {
    console.log("called");
    this.setState({ searchText: e.target.value }, () => {
      console.log(this.state);
    });
  };

  openProduct = (el) => {
    // const { name, description, price, finalPrice, discount, image } = el;
    this.setState({ product: true, productDetails: el });
  };

  render() {
    const { searchText, product, productDetails } = this.state;

    return (
      <div className="App">
        <Navbar bg="white" variant="light" className="main-nav">
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#features">Women</Nav.Link>
            <Nav.Link href="#pricing">Kids</Nav.Link>
            <Nav.Link href="#pricing">Home & Living</Nav.Link>
            <Nav.Link href="#pricing">Offers</Nav.Link>
          </Nav>

          <Nav className="">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <img src={search} alt="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search for products, brands and more"
                aria-label="search"
                aria-describedby="basic-addon1"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChange={this.onSearch}
              />
            </InputGroup>

            <div className="side-icons">
              <div>
                <img src={profile} alt="" />
                <p>Profile</p>
              </div>
              <div>
                <img src={heart} alt="" />
                <p>Wishlist</p>
              </div>
              <div>
                <img src={bag} alt="" />
                <p>Bag</p>
              </div>
            </div>
          </Nav>
        </Navbar>

        {!product ? (
          <div className="main-content">
            <Breadcrumb className="breadcrumb-nav">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Clothing</Breadcrumb.Item>
              <Breadcrumb.Item active>Shirts for men & women</Breadcrumb.Item>
            </Breadcrumb>

            <p className="item-heading">
              Shirts for Men & Women <span>- 90077 items</span>
            </p>

            <div className="main">
              <div className="left">
                <p className="heading">Filters</p>

                <div className="gender">
                  <Form.Check type="radio" label="Men" name="gender" id={1} />
                  <Form.Check type="radio" label="Women" name="gender" id={2} />
                  <Form.Check type="radio" label="Boys" name="gender" id={3} />
                  <Form.Check type="radio" label="Girls" name="gender" id={4} />
                </div>

                <div className="categories">
                  <p className="filter-heading">Categories</p>

                  <Form.Check
                    type="checkbox"
                    label="Shirt (89245)"
                    name="categories"
                    id={1}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Sleep Shirt (775)"
                    name="categories"
                    id={2}
                  />
                </div>

                <div className="brand">
                  <p className="filter-heading">Brand</p>

                  <Form.Check
                    type="checkbox"
                    label="Parx"
                    name="brand"
                    id={1}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Roadster"
                    name="brand"
                    id={2}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Park Avenue"
                    name="brand"
                    id={3}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Blackberrys"
                    name="brand"
                    id={4}
                  />
                  <Form.Check
                    type="checkbox"
                    label="United Colors Of Benetton"
                    name="brand"
                    id={5}
                  />
                  <Form.Check
                    type="checkbox"
                    label="ColorPlus"
                    name="brand"
                    id={6}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Raymond"
                    name="brand"
                    id={7}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Louis Phillippe"
                    name="brand"
                    id={8}
                  />
                </div>

                <div className="price">
                  <p className="filter-heading">Categories</p>

                  <Form.Check
                    type="checkbox"
                    label="₹249-₹2929"
                    name="price"
                    id={1}
                  />
                  <Form.Check
                    type="checkbox"
                    label="₹2929 - ₹5619"
                    name="price"
                    id={2}
                  />
                  <Form.Check
                    type="checkbox"
                    label="₹5619 - ₹8309"
                    name="price"
                    id={3}
                  />
                  <Form.Check
                    type="checkbox"
                    label="₹8309 - ₹10999"
                    name="price"
                    id={4}
                  />
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <div className="dropdown-wrapper">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Bundles
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/">Action</Dropdown.Item>
                        <Dropdown.Item href="/">Another action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Country Of Origin
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/">All Countries</Dropdown.Item>
                        <Dropdown.Item href="/">India</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Size
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/">S</Dropdown.Item>
                        <Dropdown.Item href="/">M</Dropdown.Item>
                        <Dropdown.Item href="/">L</Dropdown.Item>
                        <Dropdown.Item href="/">XL</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By: Recommended
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/">What's New</Dropdown.Item>
                        <Dropdown.Item href="/">Popularity</Dropdown.Item>
                        <Dropdown.Item href="/">Better Discount</Dropdown.Item>
                        <Dropdown.Item href="/">
                          Price: Low to High
                        </Dropdown.Item>
                        <Dropdown.Item href="/">
                          Price: High to Low
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="products">
                  {data.map((el, index) => {
                    const {
                      name,
                      description,
                      price,
                      finalPrice,
                      discount,
                      image,
                    } = el;

                    if (name.toLowerCase().includes(searchText.toLowerCase()))
                      return (
                        <div
                          key={index}
                          className="product"
                          onClick={() => {
                            this.openProduct(el);
                          }}
                        >
                          <div className="image-holder">
                            <img src={image} alt="" />
                            <div className="info">
                              <div className="wishlist">
                                <button>Wishlist</button>
                              </div>
                              <p className="name">{name}</p>
                              <p className="desc">{description}</p>

                              <div className="product-price">
                                <span className="final-price">{`₹${finalPrice}`}</span>
                                <span className="price">{`₹${price}`}</span>
                                <span className="discount">{discount}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    else return <></>;
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-content">
            <Breadcrumb className="breadcrumb-nav">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Clothing</Breadcrumb.Item>
              <Breadcrumb.Item>Men Clothing</Breadcrumb.Item>
              <Breadcrumb.Item active>{productDetails.name}</Breadcrumb.Item>
            </Breadcrumb>

            <div className="product-page">
              <div className="image-holder">
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
                <img src={productDetails.image} alt="" />
              </div>
              <div className="product-details">
                <h1 className="heading">{productDetails.name}</h1>
                <p class="description">{productDetails.description}</p>
                <div class="price-container">
                  <p class="final-price">₹{productDetails.finalPrice}</p>
                  <p class="price">₹{productDetails.price}</p>
                  <p class="discount">({productDetails.discount} OFF)</p>
                </div>
                <div class="tax">Inclusive of all the taxes</div>
                <div class="size-section">
                  <div class="header">
                    <p>select size</p>
                  </div>
                  <div class="buttons">
                    <div class="button">39</div>
                    <div class="button">40</div>
                    <div class="button">42</div>
                    <div class="button">44</div>
                    <div class="button">46</div>
                  </div>
                </div>
                <div class="main-buttons">
                  <div class="cart-btn">
                    <img src={bag} alt="" />
                    Add to Bag
                  </div>
                  <div class="wishlist-btn">
                    <img src={heart} alt="" />
                    Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
