import { Fragment } from "react";
import Hero from "./../components/home-page/hero";
import FeaturedPosts from "./../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    image: "getting-started-nextjs.png",
    title: "Getting Started With Nextjs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    image: "getting-started-nextjs.png",
    title: "Getting Started With Nextjs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    image: "getting-started-nextjs.png",
    title: "Getting Started With Nextjs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    image: "getting-started-nextjs.png",
    title: "Getting Started With Nextjs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
