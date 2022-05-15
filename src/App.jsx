import { useState } from "react";
import "./styles.css";
import items from "./data";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";

export default function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [menuItems, setmenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterButton = (category) => {
    if (category === "all") {
      setmenuItems(items);
      return;
    }

    const newItems = items.filter((e) => {
      return e.category === category;
    });
    setmenuItems(newItems);
  };

  return (
    <main>
      <h1 className="heading">Our menu</h1>
      <Categories categories={categories} filterButton={filterButton} />
      <Menu items={menuItems} />
    </main>
  );
}
