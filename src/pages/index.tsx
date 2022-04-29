import type { NextPage } from "next";
import Head from "next/head";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero, Message } from "../components/Hero";
import CardList from "../features/card/CardList";
import { url } from "../utils/config";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>interaction app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-16">
        <Hero />
        <Message />
        <section>
          <div
            className="relative my-24 h-96 bg-fixed bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${url("/images/cat3.jpg")})` }}
          ></div>
        </section>
        <div className="container mx-auto px-4">
          <section className="my-24">
            <div className="text-center mb-16">
              <p className="text-sm font-bold mb-2">Voices</p>
              <h2 className="text-3xl font-bold">お客様の声</h2>
              <p className="mt-4 text-base font-bold text-gray-800">
                この製品でお客様の声を聞いています。
              </p>
            </div>
            <CardList />
          </section>
        </div>
      </main>
      <section className="my-24">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
