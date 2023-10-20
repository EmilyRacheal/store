import { Button } from "@mantine/core";
import { Location, Notification } from "@/components/molecules/modals";
import { useContext } from "react";
import { IModalContext, ModalContext } from "@/providers";
import { NotifyCard } from "@/molecules/modals/notify-card";
import { ProductInfo } from "@/molecules/modals/product-info";
import { CatalogueModal } from "@/molecules/modals";
import Categories from "@/molecules/categories/categories";
import { SharePproduct } from "@/molecules/modals";
import { Header } from "@/atoms/header";
import Navbar from "@/molecules/navbar/navbar";
import Cards from "../components/atoms/cards/productCard";
import Footer from "../components/molecules/footer/homeFooter";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import CategoriesList from "@/molecules/categories/categories";
// import TopNavBar from "@/quickSearch/topNavBar";
import HeroCarousel from "@/molecules/heroCarousel/heroCarousel";
import HomePage from "@/views/dashboard/home/home";
import Head from "next/head";

export default function Home() {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  return (
    <>
      <div className="flex w-full gap-2 justify-center items-center">
        <HomePage />
        {/* <Button
          className=" bg-red-600"
          onClick={() =>
            setModalState({
              component: <Location />,
              opened: true,
            })
          }
        >
          Click me
        </Button>

        <Button
          className=" bg-blue-500"
          onClick={() =>
            setModalState({ component: <Notification />, opened: true })
          }
        >
          Notify filled
        </Button>

        <Button
          className=" bg-black text-white"
          onClick={() => {
            setModalState({ component: <NotifyEmpty />, opened: true });
          }}
        >
          Empty
        </Button>

        <Button
          className=" bg-yellow-500"
          onClick={() => {
            setModalState({
              component: <ProductInfo />,
              opened: true,
            });
          }}
        >
          Product Info
        </Button>

        <Button
          className=" bg-lime-950 text-white"
          onClick={() => {
            setModalState({
              component: <CatalogueModal />,
              opened: true,
            });
          }}
        >
          Catalogue
        </Button>
        <Button
          className=" bg-lime-950 text-white"
          onClick={() => {
            setModalState({
              component: <Categories />,
              opened: true,
            });
          }}
        >
          Catalogue
        </Button>

        <Button
          className=" bg-lime-950 text-white"
          onClick={() => {
            setModalState({
              component: <SharePproduct />,
              opened: true,
            });
          }}
        >
          Share Product
        </Button> */}
      </div>

      {/* <Navbar />
      <Cards />
      <Footer /> */}
    </>
    // <Header />
  );
}
