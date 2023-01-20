import { format, formatDistanceToNow } from "date-fns";
import { set } from "date-fns/esm";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { Comments } from "../comments/Comments";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link'
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}
export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setNewComment] = useState(["muito bom!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedAtFormatted = format(publishedAt, "LLLL do HH:MM:SS");

  const publishedDateActual = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse Campo é obrigatório!");
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setNewComment([...comments, newCommentText]);

  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function onDeleteComment(commentToDelete: string) {
    //imutabilidade
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setNewComment(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder={false} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateActual}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe um comentário</strong>

        <textarea
          name="comment"
          placeholder="O que está pensando?"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comments
              key={comment}
              content={comment}
              onDeleteComment={onDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
