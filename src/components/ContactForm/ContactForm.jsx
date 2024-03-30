import { Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik>
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <input className={css.field} type="text" name="name" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <input className={css.field} type="number" name="number" />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
