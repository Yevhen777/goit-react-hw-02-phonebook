import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
// import { Formik, Form } from 'formik';

export const ContactForm = ({
  handleSubmit,
  handleChange,
  name,
  number,
  initialValues,
}) => {
  return (
    // <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <h3>Name</h3>
        <input
          className={style.input}
          id={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <h3>Number</h3>
        <input
          className={style.input}
          id={nanoid()}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
    // </Formik>
  );
};
