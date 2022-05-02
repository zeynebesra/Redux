import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, removeAllContacts } from "../../redux/contactSlice";
import Item from "./Item";

function List() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const handleDeleteAll = () => {
    if (window.confirm("are yousure?")) {
      dispatch(removeAllContacts());
    }
  };

  console.log(contacts);
  return (
    <div>
      {total > 0 && (
        <div className="deleteAllBtn" onClick={handleDeleteAll}>
          Delete All
        </div>
      )}

      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
