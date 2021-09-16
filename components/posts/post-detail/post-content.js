import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  image: "getting-started-nextjs.png",
  title: "Getting Started With Nextjs",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# This is first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
