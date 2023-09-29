import { createContext, useContext, useEffect, useState } from "react";
//Evaluar meter aqui un servicio con una funcion para abtener los datos de usuario

//Utilizar aqui lo de obtener el token

const UserContext = createContext();
const PostsContext = createContext();

export const useUser = () => useContext(UserContext);
export const usePostsContext = () => useContext(PostsContext);

export function PostsProvider({ children }) {
  const token = localStorage.getItem("token");
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchData = (key) => {
    const filteredPosts = allPosts.filter((item) => {
      return (
        item.description.toLowerCase().includes(key) ||
        item.username.toLowerCase().includes(key)
      );
    });

    setDisplayedPosts(filteredPosts);
  };

  useEffect(() => {
    searchData(searchTerm);
  }, [searchTerm]);

  const getAllPosts = () => {
    fetch("http://localhost:4000/posts/home", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data.data);
        setDisplayedPosts(data.data);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts: displayedPosts,
        setPosts: setDisplayedPosts,
        setSearchTerm,
        getAllPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("session"))
  );

  const setUserAndStorage = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("session", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("session");
    }
  };

  return (
    <UserContext.Provider value={[user, setUserAndStorage]}>
      {children}
    </UserContext.Provider>
  );
}
