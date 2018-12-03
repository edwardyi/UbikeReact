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
      filterText: ""
    };
  }
  updateFilterText(value) {
    this.setState({ filterText: value });
    // this.props.updateFilterText(value);
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
          <ShortList />
          <UbikeList data={data} filterText={this.state.filterText} />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
