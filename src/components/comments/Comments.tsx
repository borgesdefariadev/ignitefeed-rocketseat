import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import styles from "./Comments.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comments({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/borgesdefariadev.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Borges</strong>
              <time title="9 de Janeiro às 17:00" dateTime="2023-1-9 17:00:38">
                há 1h.
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
