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
      status: "dropped",
    },
    {
      title: "Post Two",
      id: 2,
      status: "upcoming",
    },
  ]);

  let addPost = (uploadPost) => {
    setPosts((prevState) => [...prevState, uploadPost]);
    setModal(false);
  };

  return (
    <>
      <Navbar setModal={setModal} />
      <PostList posts={posts} />
      {showModal && (
        <Modal setModal={setModal}>
          <PostFrom addPost={addPost} />
        </Modal>
      )}
    </>
  );
}

export default App;
