import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  gap: 15px;
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;
