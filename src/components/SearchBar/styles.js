import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  textField: { width: "80%", backgroundColor: "#fff" },
  searchButton: { padding: "0 10px" },
  searchContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  dataList: { width: "80%" },
});

export const useStyles = makeStyles(styles);
