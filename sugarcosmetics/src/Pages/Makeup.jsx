import { useEffect } from "react";
import { useState } from "react";
import { Item } from "../Components/Item";
import { Loader } from "../Components/Loader";
import makeupData from "../makeupData.json";

export const Makeup = () => {
  const [data, setData] = useState(makeupData)
  const [loading, setLoading] = useState(true)

  const updateData = x => {
    setData(x)
    setLoading(false)
  }

  const highToLow = () => {
    const highData = [...makeupData]

    highData.sort(((a, b) => {
      return a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    }))

    updateData(highData)
  }

  const lowToHigh = () => {
    const lowData = [...makeupData]

    lowData.sort(((a, b) => {
      return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    }))

    updateData(lowData)
  }

  const makeRelevance = () => {
    updateData(makeupData)
  }

  useEffect(() => {
    setLoading(false)
  })

  return (
    <div className="makeup">
      <div className="poster" style={{ backgroundColor: "rgb(63, 63, 63)" }}>
        <img
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
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
