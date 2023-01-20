import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Post } from "../../components/post/Post";

import "./../../styles/global.css/";
import styles from "./../../pages/Home/Home.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/borgesdefariadev.png",
      name: "Ricardo Borges",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de adicionar mais um projeto no meu portifólio. É uma aplicação de saúde e bem estar que fiz em parceria com mais dois colaboradores. 🚀 @stecks10 @wallacecamarinha",
      },
      { type: "link", content: "http://github.com/borgesdefariadev" },
    ],
    publishedAt: new Date("2023-01-16 20:13:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/stecks10.png",
      name: "Vitor Nunes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de adicionar mais um projeto no meu portifólio. É uma aplicação de saúde e bem estar que fiz em parceria com mais dois colaboradores. 🚀 @borgesdefariadev @wallacecamarinha",
      },
      { type: "link", content: "http://github.com/stecks10" },
    ],
    publishedAt: new Date("2023-01-16 20:13:00"),
  },
];

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
