import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Loading = () => (
  <LoadingWrapper>
    <Loader />
  </LoadingWrapper>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadingWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin: -50px 0px 0px -50px;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #1f0700;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;
