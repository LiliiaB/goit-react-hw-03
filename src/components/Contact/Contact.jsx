import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export const Contact = ({ data: { id, name, number } }) => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button>Delete</button>
    </div>
  );
};
export default Contact;
