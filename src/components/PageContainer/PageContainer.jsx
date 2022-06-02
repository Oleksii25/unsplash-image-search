import React from "react";
import { Container } from "@material-ui/core";
import ImageSearchView from "../ImageSearchView";
import { useTranslation } from 'react-i18next';

import { useStyles } from "./styles";

const PageContainer = () => {
  const { container } = useStyles();
  const { t } = useTranslation('main');

  return (
    <Container className={container}>
      <ImageSearchView />
      <p>
        {t('first')}
      </p>
      <p>
        {t('second')}
      </p>
      <p>
        {t('third', { count: 0.1 })}
      </p>
    </Container>
  );
};

export default PageContainer;
