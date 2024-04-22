import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Post
        author="Ernesto Salias"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Accusantium, possimus deleniti facere modi, ab laudantium fugiat voluptat
        um natus ipsum, quo suscipit enim earum quas necess
        itatibus incidunt eveniet aliquam animi hic."
      />
      <Post author="Gabril sdsdsd" content="Novo post" />
    </>
  );
}
