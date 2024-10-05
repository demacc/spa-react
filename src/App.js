import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import PostFrom from "./components/PostForm";

function App() {
  let [showModal, setModal] = useState(false);

  let [posts, setPosts] = useState([
    {
      title: "Post One",
      id: 1,
    },
    {
      title: "Post Two",
      id: 2,
    },
    {
      title: "Post Three",
      id: 3,
    },
  ]);

  return (
    <>
      <Navbar setModal={setModal} />
      <PostList posts={posts} />
      {showModal && (
        <Modal setModal={setModal}>
          <PostFrom />
        </Modal>
      )}
    </>
  );
}

export default App;
