import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div style={{ width: 100, height: 100, position: "relative" }}>
      <Image
        src="/sunset.jpg"
        alt="picture of sunset"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Home;
