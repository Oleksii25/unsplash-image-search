import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  textField: { maxWidth: "450px", backgroundColor: "#fff", flexGrow: 1 },
  searchButton: { padding: "0 10px" },
  searchContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1300px",
    margin: "0 auto",
  },
});

export const useStyles = makeStyles(styles);
