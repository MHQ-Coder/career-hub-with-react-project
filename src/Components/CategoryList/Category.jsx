
// eslint-disable-next-line react/prop-types
const Category = ({ category }) => {
const {id, category_name, availability } = category;
    return (
        <div>
            <div className="card bg-gradient-to-r from-indigo-100 rounded-lg">
                <div className="card-body">
                    <img src="../../assets/icons/chip.png" alt="" />
                    <p>{category_name}</p>
                    <div className="card-actions ">
                        <button className="btn bg-gradient-to-r from-indigo-200 via-purple-100 ">{availability}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;