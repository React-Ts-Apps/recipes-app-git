import instance from "../api/axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import SpecialDishes from "./SpecialDishes";
import { mealProps } from "../types";

const Menu = () => {
  const [menu, setMenu] = useState<mealProps[]>([]);
  useEffect(() => {
    instance
      .get("/search.php?f=b")
      .then((response) => setMenu(response.data.meals));
  }, []);
  return (
    <div>
      <Header />
      <SpecialDishes specialDishes={menu} />
    </div>
  );
};
export default Menu;
