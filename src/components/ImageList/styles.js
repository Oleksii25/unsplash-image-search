import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  imageList: { padding: "30px 20px" },
  imageCard: {
    borderRadius: "25%",
    cursor: "pointer",
    overflow: "hidden",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 2,
    },
  },
});

export const useStyles = makeStyles(styles);
