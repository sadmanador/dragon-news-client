import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import NewsSummer from "../Shared/NewsSummery/NewsSummer";

const Categories = () => {
  const categoryNews = useLoaderData();

  return (
    <div>
      <h3 className="text-center bg-light rounded shadow mb-5 p-2">
        We found
        <FaNewspaper className="mx-2"/>
         {categoryNews.length}
         </h3>
      {categoryNews.map((news) => (
        <NewsSummer key={news._id} news={news}></NewsSummer>
      ))}
    </div>
  );
};

export default Categories;
