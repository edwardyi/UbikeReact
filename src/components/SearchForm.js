import React from "react";
import ReactDOM from "react-dom";

class SearchForm extends React.Component {
  filterUbike() {
    // 方法1:傳入物件
    const inputVal = this.filterInput.value;
    this.props.updateFilterText(inputVal);
    // 方法2: 傳入ref名稱
    // const inputVal = this.refs.filterInput.value;
    // console.log(inputVal);
  }
  render() {
    console.log(this.props.filterText);
    return (
      <header>
        <form>
          <input
            ref={value => {
              this.filterInput = value;
            }}
            type="text"
            placeholder="請輸入場站名稱"
            onChange={this.filterUbike.bind(this)}
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;
