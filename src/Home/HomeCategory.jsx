import React from "react";
import { Link } from "react-router-dom";

function HomeCategory() {
  const subTitle = "Choose Any Products";
  const title = "Buy Everything with Us";
  const btnText = "Get Started Now";

  const categoryList = [
    {
      imgUrl: "src/assets/images/category/01.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "DSLR Camera",
    },
    {
      imgUrl: "src/assets/images/category/02.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Shoes",
    },
    {
      imgUrl: "src/assets/images/category/03.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Photography",
    },
    {
      imgUrl: "src/assets/images/category/04.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Formal Dress",
    },
    {
      imgUrl: "src/assets/images/category/05.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Colorful Bags",
    },
    {
      imgUrl: "src/assets/images/category/06.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Home Decor",
    },
  ];
  return (
    <div className="categiry-section style-4 padding-tb">
      <div className="cointainer">
        {/* section header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to={`/shop`} className="category-item">
                  <div className="category-inner">
                    {/* thumb nail */}
                    <div className="category-thumb">
                      <img src={`${val.imgUrl}`} alt="" />
                    </div>
                    {/* content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={`${val.iconName}`}></i>
                      </div>
                      <Link to={``}>
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to={`/shop`} className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
