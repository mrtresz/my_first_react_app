import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    constructor(props) {
        super(props);
        // Initializing the state with the rating passed as a prop
        this.state = { rating: this.props.rating };
    }

    // Function to handle click event on stars
    handleClick(ratingValue) {
        // Updating the state with the new rating value
        this.setState({ rating: ratingValue });
    }

    render() {
        return (
            <div style={styles.starStyle}>
                <h1>
                    Rating: {this.state.rating}
                </h1>
                {/* Rendering stars based on the current rating state */}
                {/* If rating is greater than or equal to 1, render a filled star, otherwise render an outlined star */}
                {this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
                )}
                {/* Same for the rest of the stars */}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 2)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 4)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
                )}
            </div>
        );
    }
}

export default Rating;

const styles = {
    starStyle: {
        color: "magenta"
    }
}
