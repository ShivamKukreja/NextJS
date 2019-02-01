import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} name={show.name} id={show.id} />
      ))}
    </ul>
  </Layout>
);
Index.getInitialProps = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const shows = await response.json();
  console.log(`Show data fetched. Count: ${shows.length}`);
  return { shows };
};
export default Index;
