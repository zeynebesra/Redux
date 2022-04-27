import { useSelector } from "react-redux";
import styles from "./notelist.module.css";

const NoteLists = () => {
  const items = useSelector((state) => state.notes.items);
  const search = useSelector((state) => state.notes.search);
  console.log(search);
  console.log(items);

  return (
    <div className={styles.container}>
      {items
        .filter((val) => {
          if (search === "") return val;
          else if (val.note.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
          return false;
        })
        .map((item) => (
          <div
            key={item.id}
            style={{
              background: item.color,
              width: "200px",
              height: "30px",
              wordWrap: "break-word",
              textAlign: "center",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "2px #ccc",
              borderRadius: "5px",
            }}
          >
            {item.note}
          </div>
        ))}
    </div>
  );
};

export default NoteLists;
