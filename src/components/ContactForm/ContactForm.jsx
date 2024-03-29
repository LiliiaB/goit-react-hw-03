import { Formik } from "formik";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form className={css.form}>
      <input className={css.field} type="text" name="name" />
      <input className={css.field} type="number" name="number" />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
