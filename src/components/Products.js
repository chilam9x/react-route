import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";
class Products extends Component {
  render() {
    var products = [
      { id: 1, slug: "iphone-x", name: "iphone X", price: 100 },
      { id: 2, slug: "iphone-xs", name: "iphone XS", price: 200 },
      { id: 3, slug: "iphone-xs-max", name: "iphone XS Max", price: 400 },
      { id: 4, slug: "iphone-xr", name: "iphone XR", price: 500 },
      { id: 5, slug: "iphone-11", name: "iphone 11", price: 600 },
      { id: 6, slug: "iphone-11-pro", name: "iphone 11 Pro", price: 700 },
    ];

    var { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} -{product.name} -{product.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="list-group">
              <ul className="list-group-item">{result}</ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Route path="/products/:slug" component={Product} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
