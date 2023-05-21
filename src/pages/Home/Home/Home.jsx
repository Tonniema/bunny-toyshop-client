import Title from "../../../../Hooks/Title";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import GalleryImg from "../GalleryImg/GalleryImg";
import MarqueeSection from "../Marquee/MarqueeSection";
import Review from "../Review/Review";
import ShopByAge from "../ShopByAge/ShopByAge";
import Services from "./Services/Services";






const Home = () => {
    Title('Home')
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ShopByAge></ShopByAge>
            <GalleryImg></GalleryImg>
            <MarqueeSection></MarqueeSection>
            <Categories></Categories>
            <Services></Services>
            <Review></Review>
            
            
        </div>
    );
};

export default Home;