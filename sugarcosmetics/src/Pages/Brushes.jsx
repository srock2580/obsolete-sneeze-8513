import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../Components/Loader";
import { Item } from "../Components/Item";
import BrushesData from "../brushesData.json";

export const Brushes = () => {
  const [data, setData] = useState(BrushesData);
  const [loading, setLoading] = useState(true);

  const updateData = (x) => {
    setData(x);
    setLoading(false);
  };

  const highToLow = () => {
    const highData = [...BrushesData];

    highData.sort((a, b) => {
      return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
    });

    updateData(highData);
  };

  const lowToHigh = () => {
    const lowData = [...BrushesData];

    lowData.sort((a, b) => {
      return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });

    updateData(lowData);
  };

  const makeRelevance = () => {
    updateData(BrushesData);
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div>
      <div className="poster" style={{ backgroundColor: "rgb(255, 210, 156)" }}>
        <img
          src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg"
          alt=""
        />
      </div>
      <div className="product-sec">
        <div className="sort-sec">
          <h4>Sort by</h4>
          <button onClick={makeRelevance}>Price: Relevance</button>
          <button onClick={highToLow}>Price: High to Low</button>
          <button onClick={lowToHigh}>Price: Low to High</button>
        </div>
        <div className="item-sec">
          {loading ? <Loader /> : data.map((ele) => <Item {...ele} />)}
        </div>
      </div>
    </div>
  );
};
