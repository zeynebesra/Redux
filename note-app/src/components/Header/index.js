import { useState } from "react";
import styles from "./header.module.css";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/notesSlice";
const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFilter(search));
    setSearch("");
  };

  return (
    <div>
      <h1 style={{ color: "black", fontFamily: "Lucida Console" }}>Note App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <input
          type="submit"
          className={styles.button}
          value="Search | Show All"
        />
      </form>
    </div>
  );
};

export default Header;
