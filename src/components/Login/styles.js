import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5; /* cor de fundo suave */
  padding: 20px;
`;

export const Content = styled.div`
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4285f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ae8;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #0073b1;
  }

  &:first-child:hover {
    color: #000;
  }
`;
