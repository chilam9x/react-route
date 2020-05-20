import React,{Component} from "react";

class Product extends Component {
  render() {
    var {match}=this.props;
    var slug = match.params.slug;
    console.log(slug);
    return (
     <h1>{match.url}</h1>
    );
  }
}

export default Product;