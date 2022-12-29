import { useEffect } from "react";
import { useState } from "react";
import { Item } from "../Components/Item";
import { Loader } from "../Components/Loader";

export const Search = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  let filterData = JSON.parse(localStorage.getItem("filterData")) || [];

  const updateData = x => {
    setData(x)
    setLoading(false)
  }

  const highToLow = () => {
    const highData = [...filterData]

    highData.sort(((a, b) => {
      return a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    }))

    updateData(highData)
  }

  const lowToHigh = () => {
    const lowData = [...filterData]

    lowData.sort(((a, b) => {
      return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    }))

    updateData(lowData)
  }

  const makeRelevance = () => {
    updateData(filterData)
  }

  useEffect(() => {
    updateData(filterData)
  }, [])

  return (
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
  );
};
