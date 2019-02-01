import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

const Content = props => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
  </div>
);

const Post = props => (
  <Layout>
    <Content {...props} />
  </Layout>
);
Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`)
  return { show }
};
export default Post;
