import React, { Component } from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import "normalize.css";

import UbikeList from "./components/UbikeList";
import data from "./data/taoyuan.json";
import Credit from "./components/Credit";
import SearchForm from "./components/SearchForm";
import ShortList from "./components/ShortList";

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
    const favList = this.state.favourites.concat([id]);
    // console.log("add ", favList);
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
          <ShortList data={data.retVal} favourites={this.state.favourites} />
          <UbikeList
            data={data}
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
