import React, { Component } from "react";
import Nav from "./Nav";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    currentProducts: "",
    currentCategoryName: "",
    products: [],
    
  };

  changeCategory = (category) => {
    this.setState({ currentProducts: category.id });
    this.setState({ currentCategoryName: category.categoryName });
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("http://localhost:8080/products")
      .then((data) => data.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = {
      title: "Product List",
      name: "Category Name: ",
      ıd: "Category Id: ",
    };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Nav />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategoryName={this.state.currentCategoryName}
                currentIdProduct={this.state.currentProducts}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
