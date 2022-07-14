import React from 'react';
import { useEffect, useState } from 'react';
import "../../style/Home.css";
import axios from 'axios';
export default function HotDishes() {
  const [selectValue, setSelectValue] = useState("Beef");
  const [data, setData] = useState([]);

  function getValue(set) {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${set}`)
      .then(response => setData(response.data.meals))
      .catch(err => console.log(err))
    setSelectValue(set)
  }
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectValue}`)
      .then(response => setData(response.data.meals))
      .catch(err => console.log(err))
  }, [])
  console.log(data)
  return (
    <div className='hotDishes'>
      <ul className='hotDishesHeader mt-xl-0 mt-3'>
        <h4>CHOOSE DISHES</h4>
        <select class="form-select text-white me-4 " value={selectValue} onChange={(e) => getValue(e.target.value)} style={{ backgroundColor: "#1F1D2B" }} aria-label="Default select example">
          <option value="Beef" selected>Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Dessert">Dessert</option>
          <option value="Lamb">Lamb</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Pasta">Pasta</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starter</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Goat">Goat</option>
        </select>
      </ul>
      <div className='hotDishesCardArea'>
          {data.map(item =>
            <div className="hotDishesCard" key={item.idMeal}>
              <img src={item.strMealThumb} alt="img" className='FoodImg' />
              <li>{item.strMeal}</li>
              <p>$ {Math.round(Math.random() * 20)}</p>
              <p>{Math.round(Math.random() * 20)} Bowls available</p>
            </div>
          )}
      </div>
    </div>
  )
}
