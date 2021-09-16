import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
