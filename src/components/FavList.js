import React from "react";
import ReactDOM from "react-dom";

export default ({ data, favourites, removeFavourite }) => {
  const favList = favourites.map(favourite => {
    return (
      <li
        key={data[favourite]["id"]}
        className={data[favourite]["sbi"] < 10 ? "danger" : "info"}
        onClick={() => {
          const id = data[favourite]["id"];
          removeFavourite(id);
        }}
      >
        {data[favourite]["sna"]}
      </li>
    );
  });
  return (
    <div className="favourites">
      <span>點擊名稱加入....</span>
      <ul>{favList}</ul>
    </div>
  );
};
