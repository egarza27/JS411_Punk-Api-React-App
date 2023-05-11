import "./App.css";
import { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
      liked: false,
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return (
              <BeerCard
                key={index}
                name={beer.name}
                image_url={beer.image_url}
                tagline={beer.tagline}
                abv={beer.abv}
                description={beer.description}
              ></BeerCard>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
