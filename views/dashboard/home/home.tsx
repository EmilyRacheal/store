import React, { useEffect, useState } from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import QuickSearch from "@/molecules/quickSearch/quckSearch";
import HeroCarousel from "@/molecules/heroCarousel/heroCarousel";
import CategoriesList from "@/molecules/categories/categories";
import ProductCard from "@/atoms/cards/productCard";
import Dropdown from "@/atoms/dropdown/dropdown";
import { AdsSlider } from "@/molecules/ads-slider";
import LoadMoreBtn from "@/molecules/loadmoreBtn/loadMoreBtn";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event and update the scrollY state
    function handleScroll() {
      setScrollY(window.scrollY);

      if (window.scrollY > 80 && window.screen.availWidth <= 600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DashboardWrapper withFooter hasBorder={true} >
      <div className="w-full md:flex hidden ">
        <AdsSlider />
        {/* <HeroCarousel /> */}
      </div>

      <div className={`${isFixed && "fixed"} w-full`}>
        <CategoriesList isFixed={isFixed} />
      </div>
      <QuickSearch />
      {/* <Dropdown /> */}

      <div
        className={` ${
          isFixed && "mt-[230px]"
        } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[35px] gap-x-[25px]  lg:gap-x-[5px] pr-[4%] lg:pr-[0px] px-[4%] md:px-[2%] mx-auto max-w-[1150px] mt-[20px] `}
      >
        {[...Array(15)].map(() => {
          return (
            <div className="">
              <ProductCard />
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center py-[7%]">
      <LoadMoreBtn />
      </div>

    </DashboardWrapper>
  );
};

export default Home;
