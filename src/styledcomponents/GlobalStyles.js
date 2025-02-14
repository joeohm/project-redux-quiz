import styled from 'styled-components';
import { Link } from 'react-router-dom';
import quizBackground from 'assets/quizbackground.jpg';

export const OuterWrapper = styled.section`
  background-image: url(${quizBackground});
  background-attachment:fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  padding: 2% 5%;
  margin: 150px 10% 0;
  box-shadow: 10px 8px 26px 3px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 10px 8px 26px 3px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 10px 8px 26px 3px rgba(0, 0, 0, 0.42);

  h1 {
    margin: 5% 0;
    font-size: 17px;
  }

  h2 {
    margin: 0 auto;
    font-size: 16px;
  }

  p {
    margin: 10px auto;
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }

  /* --- MEDIA  QUERIES --- */

  @media (min-width: 600px) and (max-width: 1023px) {
    padding: 5% 5%;
    margin-top: 50px;
  }

  @media (min-width: 1024px) {
    padding: 5% 5%;
    margin-top: 50px;
  }
`;

export const LinkContainer = styled(Link)`
  button {
    display: block;
    padding: 5px 20px;
    margin: 10% auto;
    background-color: #cae0ff;
    border: none;
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    border-radius: 20px;

    /* --- MEDIA  QUERIES --- */

      @media (min-width: 1024px) {
      display: block;
      width: 200px;
      padding: 10px 20px;
      margin: 10% 0;
      background-color: #cae0ff;
      border: none;
      font-size: 16px;
      font-family: 'Roboto Mono', monospace;
      cursor: pointer;
      border-radius: 20px;
    }
  }
`;
