import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  pagination: {
    "& > ul": {
      justifyContent: "center",
    },
  },
});

export const useStyles = makeStyles(styles);
