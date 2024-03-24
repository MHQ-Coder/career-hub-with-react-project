import Banner from "../Banner/Banner";
import CatergoryList from "../CategoryList/CatergoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <CatergoryList></CatergoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;