import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerAnimations = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #546e7a;
  border-top: 5px solid #bdbdbd;
  border-radius: 50%;
  animation: ${SpinnerAnimations} 1.5s linear infinite;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
`;

const SpinnerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner> </Spinner>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
