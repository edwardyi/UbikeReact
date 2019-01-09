import React, { Component } from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import "normalize.css";

import UbikeList from "./components/UbikeList";
import Credit from "./components/Credit";
import SearchForm from "./components/SearchForm";
import FavList from "./components/FavList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hello~~
      filterText: "",
      // 2001, 2002, 2005
      favourites: []
    };
  }

  updateFilterText(value) {
    this.setState({ filterText: value });
    // this.props.updateFilterText(value);
  }

  handleClickFilter(id) {
    const favList =
      this.state.favourites.indexOf(id) < 0
        ? this.state.favourites.concat([id])
        : this.state.favourites;
    // console.log("add ", favList);
    this.setState({ favourites: favList });
  }
  removeFavourite(id) {
    // console.log("App remove id ", id);
    const favList = this.state.favourites.filter(key => {
      return key != id;
    });
    this.setState({ favourites: favList });
  }

  render() {
    // console.log(this.state.filterText);
    return (
      <div>
        <SearchForm
          filterText={this.state.filterText}
          updateFilterText={this.updateFilterText.bind(this)}
        />
        <main>
          <FavList
            data={this.props.data.retVal}
            favourites={this.state.favourites}
            removeFavourite={this.removeFavourite.bind(this)}
          />
          <UbikeList
            data={this.props.data}
            filterText={this.state.filterText}
            handleClickFilter={this.handleClickFilter.bind(this)}
            favourites={this.state.favourites}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
