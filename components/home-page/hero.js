import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mohsen.jpg"
          alt="An image showing mohsen"
          width={300}
          height={300}
        />
      </div>
      <h1>{"Hi, I'm Mohsen"}</h1>
      <p>This is my demo blog, nothing serious for now</p>
    </section>
  );
}

export default Hero;
