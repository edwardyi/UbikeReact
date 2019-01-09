import React from "react";
import ReactDOM from "react-dom";

class UbikeList extends React.Component {
  // 原本的資料沒有id的欄位
  addIdToData() {
    let rawData = this.props.data.retVal;
    for (let i in rawData) {
      rawData[i]["id"] = i;
      rawData[i]["is_fav"] = this.props.favourites.indexOf(i) > -1;
    }

    return Object.values(rawData);
  }
  handleClickFilter(id) {
    // onClick事件要接functoin的值
    // console.log(id);
    this.props.handleClickFilter(id);
  }

  render() {
    // console.log("UbikeList", this.props.filterText);
    const rawData = this.addIdToData();
    const { filterText } = this.props;

    const ubikeList = rawData
      .filter(rows => {
        // return rows;
        // console.log(rows.is_fav);
        // return !rows.is_fav;
        return filterText != ""
          ? rows.sna.indexOf(filterText) >= 0 && !rows.is_fav
          : rows && !rows.is_fav;
        // return (
        //   this.props.filterText != "hello" && rows.sna === this.props.filterText
        // );
      })
      .map(rows => {
        return typeof rows.id != "undefined" ? (
          <li
            onClick={() => {
              this.handleClickFilter(rows.id);
            }}
            key={rows.id}
            className={rows.sbi < 10 ? "danger" : "info"}
          >
            {rows.sna} ({rows.sbi}/{rows.bemp})
          </li>
        ) : (
          ""
        );
      });
    return (
      <div>
        <div>
          <span>
            {this.props.filterText
              ? "當前過濾的字串是:" + this.props.filterText
              : ""}
          </span>
        </div>
        <div>
          <span className="hint">站名(場站目前車輛數量/可還車位數)</span>
        </div>
        <ul>{ubikeList}</ul>
      </div>
    );
  }
}

export default UbikeList;
