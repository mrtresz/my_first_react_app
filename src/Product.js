import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Rating from './Rating';

class Product extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {


        return (
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={this.props.data.imageUrl}
                    alt="img"

                />
                <Media.Body>
                    <h5>{this.props.data.productName}</h5>
                    {this.props.data.releaseDate}
                    <Rating rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                    <p>
                        {this.props.data.description}
                    </p>
                </Media.Body>
            </Media>
        );



    }
}

export default Product;
