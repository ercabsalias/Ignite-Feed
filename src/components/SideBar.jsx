import styles from "./SideBar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://media.licdn.com/dms/image/D4D03AQEtf7wXGAT_PQ/profile-displayphoto-shrink_800_800/0/1704373019403?e=1719446400&v=beta&t=s4-wjJahbnDhQ4LQ1WM73IYY8rG_h2Risgh8Up5noTU"
        />

        <strong>Ernesto Cabingano Salias</strong>
        <span>Desenvolvedor Front-End</span>
      </div>
      <footer>
        <a>
          <PencilLine style={{ marginRight: "0.5rem" }} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
