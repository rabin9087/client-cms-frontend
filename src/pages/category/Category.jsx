import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const { categoryList } = useSelector((state) => state.categoryInfo);
  console.log(categoryList);

  return (
    <>
      {categoryList.map(({ _id, title }) => (
        <div key={_id}>{title}</div>
      ))}
    </>
  );
};

export default Category;
