import "./post.css";
export default function Post({ post }) {
  const { title, body, id, userId } = post;
  return (
    <div className="post">
      <h4>Tittle : {title} </h4>
      <p>
        <small>UserId : {userId}</small>
      </p>
      <p>
        <small>PostId : {id}</small>
      </p>
      <p>
        <small> {body}</small>
      </p>
    </div>
  );
}
