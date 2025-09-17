import { useLoaderData } from "react-router-dom";
import home1 from "../assets/home1.jpg";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
function RecipeItem() {
  const allRecipes = useLoaderData();
  return (
    <>
      <div className="cart-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="cart">
              <img src={home1} width="120px" height="100px" />
              <div className="cart-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="time">
                    <BsStopwatchFill />
                    {item.time}
                  </div>
                  <FaHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecipeItem;
