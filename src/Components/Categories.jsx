import React from "react";

const Categories = ({ categories, filterButton }) => {
  return (
    <>
      <section className="filter-button">
        {categories.map((category, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => filterButton(category)}
            >
              {category}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Categories;
