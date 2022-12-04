import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  input: {
    fontSize: "2rem",
    fontFamily: " inherit",
    color: " inherit",
    padding: " 1.5rem 2rem",
    borderRadius: " 4px",
    backgroundColor: "rgba(221, 229, 226, 5)",
    border: " none",
    borderBottom: "3px solid transparent",
    width: "80%",
    textTransform: "capitalize",
    minWidth: "50%",
    display: " block",
    transition: "all .3s",

    "&:focus": {
      outline: "none",
      boxShadow: "0 1rem 2rem rgba(black, .1)",
      borderBottom: "3px solid green",
    },
    " &:focus:invalid": {
      borderBottom: "3px solid brown",
    },
    "&::-webkit-input-placeholder": {
      color: "gray",
    },
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:not(:last-child)": {
      marginBottom: "2.5rem",
    },
  },

  label: {
    color: "gray",
    marginRight: "2rem",
    textTransform: "uppercase",
    fontSize: "2rem",
    fontWeight: "1 700",
    marginTop: "1.7rem",
    display: "1 block",
  },
});
export const MyInput = (props) => {
  const { text, type, required, value, onChange: change, style, name } = props;
  const classes = useStyle();

  return (
    <div className={classes.main}>
      <label className={classes.label}>{text}:</label>
      <input
        type={type}
        className={classes.input}
        placeholder={text}
        required={required}
        onChange={change}
        value={value}
        name={name}
        style={style}
      />
    </div>
  );
};
