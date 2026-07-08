import Location from "./components/Location";
import StudyAt from "./components/StudyAt";
import LinkedIn from "./components/LinkedIn";
import Github from "./components/Github";
import Twitter from "./components/Twitter";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="w-full h-lvh flex items-center justify-center flex-col">
        <div className="max-w-3xl h-auto p-10">
          <h1 className="text-3xl">रितेश घरत</h1>
          <span className="text-lg font-extralight italic">
            rih-tesh gha-rat
          </span>
          <p className="my-5 text-base text-justify">
            I'm software engineer based out of{" "}
            <Location
              location="Mumbai"
              mapLink="https://maps.google.com/?q=Mumbai"
            />
            . <br />
            Curently studing computer engineering at{" "}
            <StudyAt university="VCET, Mumabi" />. I have a passion for building
            things and learning new technologies.
            <br />
            <br /> Reach out to me on <LinkedIn username="riteshgharat" />,{" "}
            <Twitter username="hsetir_0" /> or check out my projects on{" "}
            <Github username="riteshgharat" />.
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
