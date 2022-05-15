import React from "react";

const Menu = ({ items }) => {
  return (
    <section className="grid center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;

        return (
          <section key={id} className="card">
            <img src={img} alt="menu-item" className="image  filter-image" />
            <article className="content">
              <article className="content-heading">
                <h4>{title}</h4>
                <h4>${price}</h4>
              </article>
              <hr />
              <p className="text-content">{desc}</p>
            </article>
          </section>
        );
      })}
    </section>
  );
};

export default Menu;
