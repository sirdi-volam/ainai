import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Aside } from "../components/Aside/Aside";
import { Post } from "../pages/Post/index";

import { fetchPosts } from "../redux/slices/posts";

export const Home = () => {
  
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)

  const isPostsLoading = posts.status === "loading"

  React.useEffect(() => {
    dispatch(fetchPosts())
  })

  console.log(posts)
  return (
    <>
      <container className="main-container">

        <Aside />
        <main className="main">
          {(isPostsLoading ? [...Array(5)] : posts.items).map(() => (
            <Post
              key={1}
              id="1"
              title="Заголовок поста"
              imageUrl={"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}
              text="Текст поста"
              user={{
                avatarUrl: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
                name: "Автор поста",
              }}
              createAt={"22.02.2022"}
              commentsCount={5}
              viewsCount={100}
              tags={["tag1", "tag2"]}
              isLoading={true}
              isEditable
            />
          ))}
        </main>
      </container>
    </>
  );
}

// 2:30:25