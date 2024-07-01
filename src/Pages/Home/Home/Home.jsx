import Banner from "../Banner/Banner";
import wave from "../../../assets/wave.svg";
import Reviews from "../../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="flex relative flex-col items-center justify-center">
        <Banner></Banner>

        <img className="absolute bottom-0 w-full" src={wave} alt="" />
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
