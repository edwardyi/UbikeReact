import React from "react";
import ReactDOM from "react-dom";

// Method 1
export default () => {
  return (
    <div className="credit">
      Open Data From{" "}
      <a href="https://data.tycg.gov.tw/opendata/datalist/datasetMeta?oid=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c">
        桃園公共自行車即時服務資料
      </a>
      <br />
      Tutorial From{" "}
      <a href="https://www.youtube.com/watch?v=gpIbJsSsbz4&index=8&list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m">
        React Beginner Series
      </a>
    </div>
  );
};

// Method 2
// const Credit = () => {
//   return (
//     <div className="credit">
//       Open Data From{" "}
//       <a href="https://data.tycg.gov.tw/opendata/datalist/datasetMeta?oid=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c">
//         桃園公共自行車即時服務資料
//       </a>
//       <br />
//       Tutorial From
//       <a href="https://www.youtube.com/watch?v=gpIbJsSsbz4&index=8&list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m">
//         React Beginner Series
//       </a>
//     </div>
//   );
// };

// export default Credit;

// Method 3
// class Credit extends React.Component {
//   render() {
//     return (
//       <div className="credit">
//         Open Data From{" "}
//         <a href="https://data.tycg.gov.tw/opendata/datalist/datasetMeta?oid=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c">
//           桃園公共自行車即時服務資料
//         </a>
//         <br />
//         Tutorial From
//         <a href="https://www.youtube.com/watch?v=gpIbJsSsbz4&index=8&list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m">
//           React Beginner Series
//         </a>
//       </div>
//     );
//   }
// }

// export default Credit;
