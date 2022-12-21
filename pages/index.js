import Header from "../components/Header";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Input,
  Card,
  Spacer,
  Text,
  Col,
  Row
} from "@nextui-org/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Optimize IAP prices per country | IAPPY</title>
        <meta name="title" content="Optimize IAP prices per country | IAPPY" />
        <meta name="description" content="IAPPY optimizes the in-app purchase prices per country, resulting in more revenue."/>
        <meta name="keywords" content="in-app purchase optimizationcountry-specific pricingapp pricing strategycurrency exchange ratedynamic pricingpurchasing powerpurchasing power parityapp analyticspromotions and discountsrevenue optimizationmarket research"/>
        <meta property="og:title" content="Optimize in-app purchase (IAP) prices per country | IAPPY" />
        <meta property="og:description" content="IAPPY optimizes the in-app purchase prices per country, resulting in more revenue." />
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Hero/>
      <Prices />
      <Features />
      <Footer />
    </div>
  );
}
