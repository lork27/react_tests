export function getPosts({ start = 0, end = 10 }) {
  return fetch(
    `http://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`
  ).then((response) => response.json());
}
export function getUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
    response.json()
  );
}