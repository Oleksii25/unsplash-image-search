import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    backgroundColor: "#cfe8fc",
    minHeight: "100vh",
    maxHeight: "100%",
    maxWidth: "100%",
    textAlign: "center",
    paddingBottom: "30px",
  },
  divider: {
    marginTop: "20px",
  },
});

export const useStyles = makeStyles(styles);
