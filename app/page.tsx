import { AboutUs } from "./components/AboutUs";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
        </header>
        <AboutUs />
        <section id="services"></section>
        <section id="testymanials"></section>
        Hello World!
        <footer></footer>
      </main>
    </>
  );
}
