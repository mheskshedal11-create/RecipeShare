import homepage from "../assets/home.jpg";
import "../App.css";
import RecipeItem from "../components/RecipeItem";

function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>
            Discover & Share <span>Food Recipes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis beatae eos inventore illum perferendis
            earum est ipsum dolorum pariatur veritatis ipsa qui quam, aspernatur
            velit soluta unde molestiae vel.
          </p>
          <button className="primary-btn">Share Your Recipe</button>
        </div>
        <div className="right">
          <img src={homepage} alt="home page" />
        </div>
        <div className="bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fillOpacity="1"
              d="M0,64L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="recipe">
          <RecipeItem />
        </div>
      </section>
    </>
  );
}

export default Home;
