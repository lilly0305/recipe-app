import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Intro from '@pages/intro/Intro';

const Container = styled.div(() => ({
  minHeight: '100vh',
}));

function RecipeRouter() {
  return (
    <Container>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </Container>
  );
}

export default RecipeRouter;
