import React from "react";
import Baneer from "./Baneer";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import LoactionSpead from "./LoactionSpead";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";

function Home() {
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
    <>
      <Baneer />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LoactionSpead />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </>
  );
}

export default Home;
