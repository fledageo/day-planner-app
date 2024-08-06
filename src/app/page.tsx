import Image from "next/image";
import style from "./Home.module.css";
import Header from "@/components/complex/Header/Header";
import WelcomeSection from "@/components/complex/Welcome-section/WelcomeSection";
export default function Home() {
  return (
    <>
      {/* <div className={style.container}> */}
        <Header />
        <WelcomeSection />
        <div style={{height:1500,width:"100%"}}>
        </div>
      {/* </div> */}
    </>
  );
}
