import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .total-connections {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-connections img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        "logo hero hero"
        "buttons buttons total"
    }
    .logo-container {
      grid-area: logo;
      text-align: left;
      align-self: center;
      margin: 0;
    }
    .logo-container img {
      height: 100%;
    }
    .logo-container h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
    .hero-image {
      grid-area: hero;
      justify-self: end;
    }
    .buttons-container {
      grid-area: buttons;
      justify-content: flex-start;
    }
    .buttons-container a {
      font-size: 2.4rem;
    }
    .total-connections {
      grid-area: total;
      justify-self: flex-end;
    }
  }
`;

export const PageLandingContent = styled.div`
  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;
  }
  .logo-container img {
    height: 10rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  .hero-image {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 2.4rem;
  }

  a img {
    margin-right: 2.4rem;
  }
  
  a.study {
    background: var(--color-primary-lighter);
  }

  a.give-classes {
    background: var(--color-secundary);
  }

  a.study:hover {
    background: var(--color-primary-light);
  }

  a.give-classes:hover {
    background: var(--color-secundary-dark);
  }
`;