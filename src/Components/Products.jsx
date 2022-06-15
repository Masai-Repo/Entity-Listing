import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ratingOrder, setRatingOrder] = useState("asc");
  const [costOrder, setCostOrder] = useState("asc");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/food",
      params: {
        _page: page,
        _limit: 12,
        _sort: "rating,cost",
        _order: `${ratingOrder},${costOrder}`,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, ratingOrder, costOrder]);

  console.log(data.image);

  return (
    <div>
      <h1>Items</h1>
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button onClick={() => setPage(page + 1)}>next</button>
      <button
        disabled={costOrder === "desc"}
        onClick={() => setCostOrder("desc")}
      >
        sort by cost desc
      </button>
      <button
        disabled={costOrder === "asc"}
        onClick={() => setCostOrder("asc")}
      >
        sort by cost asc
      </button>
      <button
        disabled={ratingOrder === "desc"}
        onClick={() => setRatingOrder("desc")}
      >
        sort by rating desc
      </button>
      <button
        disabled={ratingOrder === "asc"}
        onClick={() => setRatingOrder("asc")}
      >
        sort by rating asc
      </button>
      {data?.map((item) => (
        <div>
          <img src={item.image} alt="" />
          <div>{item.name}</div>
          <div>{item.cost}</div>
          <div>{item.cuisine}</div>
          <div>{item.rating}</div>
          <div>{item.votes}</div>
        </div>
      ))}
    </div>
  );
};
