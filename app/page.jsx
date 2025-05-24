import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className="h-full mb-6">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pd-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span>ScanHeritage</span>
            <h1 className="h1">
              Preserving the<br />
              <span className="text-transparent bg-gradient-to-b from-accent to-white bg-clip-text"> Past with Technology</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">

              Scan, Extract & Reconstruct Historical and Architectural Data Using Our AI-Powered Mobile App.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              {/* <a
                href="/Naveen Dasunpriya.pdf"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 -mt-5 uppercase bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl text-accent-hover" />
                </Button></a> */}
              <div className="flex gap-4 -mt-3">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <div className="container h-full mx-auto mt-36">
        <div className="order-2 text-center xl:text-left xl:order-none">
          <span>What is this about?</span>

          <p className=" mb-9 text-white/80">
            The rapid advancements in artificial intelligence, computer vision, and mobile technologies have opened new frontiers in the way cultural heritage is preserved, studied, and experienced. This research presents an innovative mobile application designed to enhance the process of archaeological analysis and documentation, with a special focus on the ancient civilizations of Anuradhapura and Polonnaruwa—two of Sri Lanka’s most historically significant kingdoms.

            For centuries, the study of ancient artifacts, inscriptions, and architectural features has been conducted through manual fieldwork and expert interpretation. While effective, these traditional approaches are time-consuming, labor-intensive, and susceptible to human error. Moreover, access to sensitive archaeological objects is often limited, making it difficult to digitize and preserve cultural heritage on a broad scale.

            This project introduces a unified AI-driven mobile application that bridges the gap between modern technology and archaeological research. The application is built to identify and classify historical artifacts such as Sandakadapahana (moonstones), Korawakgala (wingstones), and Muragala (guard stones), using machine learning models trained on curated image datasets. It employs Optical Character Recognition (OCR) to recognize and translate ancient Brahmi inscriptions into modern Sinhala, preserving valuable textual data that would otherwise be lost to time.

            In addition to textual recognition, the application integrates 3D reconstruction capabilities using photogrammetry and deep learning techniques. This enables the creation of high-fidelity digital replicas of artifacts and ruins from 2D images, allowing researchers, students, and the general public to interact with virtual models without physically handling the original objects. Furthermore, the system supports architectural feature detection, providing insights into ancient construction styles and structural elements that define Sri Lanka’s unique cultural identity.

            While the initial focus is on the UNESCO-recognized heritage sites of Anuradhapura and Polonnaruwa, the platform is designed with scalability in mind. As more archaeological data becomes available, the system can be extended to cover other historical sites across Sri Lanka and potentially, globally.

            Ultimately, this research aims to revolutionize archaeological documentation and education by providing an accessible, efficient, and accurate tool for cultural heritage conservation. By leveraging artificial intelligence and mobile accessibility, the project contributes to digital archaeology, supports educational outreach, and fosters public engagement with Sri Lanka’s rich historical legacy—ensuring it is preserved not just in memory, but in high-resolution digital form for future generations.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Home;