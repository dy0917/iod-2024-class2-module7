import { useSearchParams, Link } from "react-router-dom";
import { useData } from "../utils/useData";
export default function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));

  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
    </>
  );
}
