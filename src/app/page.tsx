import style from "./Home.module.css";
import WelcomeSection from "@/components/complex/Main-welcome-section/WelcomeSection";


export default function Home() {
  return (
    <>
      <div className={style.container}>
        <WelcomeSection />
      </div>
    </>
  );
}
