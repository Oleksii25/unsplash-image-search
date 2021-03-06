import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  divider: {
    marginTop: "20px",
  },
  pagination: {
    "& > ul": {
      justifyContent: "center",
    },
  },
  loader: {
    position: "fixed",
    top: "50%",
    zIndex: 3,
  },
  errorMessage: {
    color: "red",
  },
});

export const useStyles = makeStyles(styles);
