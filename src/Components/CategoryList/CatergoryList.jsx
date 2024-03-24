import { useEffect, useState } from "react";
import Category from "./Category";
import { data } from "autoprefixer";

const CatergoryList = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div className="space-y-16 my-16">
            <div className="text-center">
                <h2 className="text-4xl font-semibold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid md:grid-cols-4 gap-7">
                {category.map((category, idx) => <Category key={idx} category={category}></Category>)}
            </div>
        </div>
    );
};

export default CatergoryList;