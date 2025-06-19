import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const Header = () => {
  return 
    <MainHeader></MainHeader>;

  
};
const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 10rem;
 padding: 4.8 rem;
 background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
