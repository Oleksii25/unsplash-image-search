import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    backgroundColor: "#cfe8fc",
    minHeight: "100vh",
    maxWidth: "100%",
    textAlign: "center",
  },
  divider: {
    marginTop: "20px",
  },
});

export const useStyles = makeStyles(styles);
