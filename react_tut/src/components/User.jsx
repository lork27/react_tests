export function User({ id, name, email, fetchPost }) {
  return (
    <div>
      <h3>name: {name}</h3>
      <p>email: {email}</p>
      <p>id: {id}</p>
      <button
        onClick={() => {
          fetchPost(id);
        }}
      >
        Load user posts
      </button>
    </div>
  );
}
