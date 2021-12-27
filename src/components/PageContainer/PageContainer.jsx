import React from "react";
import { Container } from "@material-ui/core";
import ImageSearchView from "../ImageSearchView";

import { useStyles } from "./styles";

const PageContainer = () => {
  const { container } = useStyles();
  
  return (
    <Container className={container}>
      <ImageSearchView />
    </Container>
  );
};

export default PageContainer;
