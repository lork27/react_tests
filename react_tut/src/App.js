import React, { useState, useEffect } from "react";
import { User } from "./components/User";
import { Post } from "./components/Post";
import { getUsers, getPosts } from "./util/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(false);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);
  const loadMore = () => {
    getPosts({ start: posts.length, end: posts.length + 10 }).then(
      (newPosts) => {
        setPosts([...posts, ...newPosts]);
      }
    );
  };
  const getPostByUserId = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {users.map(({ id, name, email }) => (
          <User
            key={id}
            id={id}
            name={name}
            email={email}
            fetchPost={getPostByUserId}
          />
        ))}
      </div>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} text={post.body} />
      ))}

      {/* {!isLoading ? (
        <button onClick={loadMore}>load 10 more</button>
      ) : (
        <p>Loaderino...</p>
      )} */}
      {/* {show ? <SomeComponent /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle component
      </button> */}
    </div>
  );
}

// function SomeComponent() {
//   useEffect(() => {
//     console.log("SomeComponent mounted");
//     return () => {
//       console.log("SomeComponent destroyed");
//     };
//   });
//   return <div>Soy un triste componente</div>;
// }
// function App() {
//   const [cities, setCities] = useState(["Paris", "Berlin", "London"]);
//   const [showList, setShowList] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowList(!showList)}>
//         {showList ? "Hide list" : "Show list"}
//       </button>
//       {showList && (
//         <ul>
//           {cities.map((city) => (
//             <City name={city} />
//           ))}
//         </ul>
//       )}
//       <button onClick={() => setCities([...cities, "Mandril"])}>
//         Add City
//       </button>
//     </div>
//   );
// }

// function City({ name }) {
//   return <li>{name}</li>;
// }

export default App;
