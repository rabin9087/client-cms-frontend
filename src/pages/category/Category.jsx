import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const { categoryList } = useSelector((state) => state.categoryInfo);

  return (
    <>
      {categoryList.map(({ _id, title }) => (
        <div key={_id} className="flex gap-3 justify-center">
          <h4 className="ext-lg font-bold"> {title}</h4>
        </div>
      ))}
    </>
  );
};

export default Category;
