import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import { m, LazyMotion, domAnimation } from "framer-motion";


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{"Vital Signs Magazine"}</title>
        <meta
          name="description"
          content={"A Health Workers’ Magazine For a New Society"}
        />
      </Head>
      <Meta />
      <Header />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              y: 20,
              opacity: 0,
              scale: 0.99,
            },
            pageAnimate: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                when: "beforeChildren",
              },
            },
          }}
        >
          <main className="bg-neutral-50 text-customRed-950 px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5">
            {children}
          </main>
        </m.div>
      </LazyMotion>
      <Footer />
    </div>
  );
}
