import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Commment(props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/C4D03AQGruDMNGRA0qw/profile-displayphoto-shrink_800_800/0/1663240326521?e=1719446400&v=beta&t=DWA_vjAZcH_ACfVLAg-zIgT_9D0wzBLKbzGaTiu4Ohk"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Makenga</strong>
              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
