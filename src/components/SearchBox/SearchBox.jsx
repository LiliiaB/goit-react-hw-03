import css from "./SearchBox.module.css";

export const SearchBox = ({}) => {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" />
    </div>
  );
};

export default SearchBox;
