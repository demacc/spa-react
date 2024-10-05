import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Modal from "./components/Modal";

function App() {
  let [showModal, setModal] = useState(false);
  let colseModal = () => {
    setModal(false);
  };
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
        <Modal>
          <h1>Zoom class is avilable</h1>
          <p>
            fee free for <a href="">join</a> here
          </p>
          <button onClick={colseModal}>Close backdrop</button>
        </Modal>
      )}
      {/* <Modal>
        <h1>Term and condition</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          quibusdam fuga? Qui repellat sapiente, dignissimos nihil tempore ea
          natus voluptate.
        </p>
      </Modal> */}
    </>
  );
}

export default App;
