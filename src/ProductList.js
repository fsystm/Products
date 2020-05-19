import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h3>
          {this.props.info.name} {this.props.currentCategoryName}
        </h3>
        <h3>
          {this.props.info.ıd} {this.props.currentIdProduct}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice}$</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
