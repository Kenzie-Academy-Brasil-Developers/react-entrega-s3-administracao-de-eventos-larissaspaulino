import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  width: 25%;
  margin-bottom: 35px;
  min-width: 300px;
  -webkit-box-shadow: 5px 5px 15px 5px #a1a1a1;
  box-shadow: 5px 5px 15px 5px #a1a1a1;
  border-radius: 7px;

  @media (min-width: 600px) {
    margin-right: 70px;
  }

  > img {
    height: 250px;
    margin-bottom: 30px;
  }

  h2 {
    margin: 20px 0px;
  }

  h3 {
    font-size: 0.8rem;
    margin: 20px 0px;
  }

  .description {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description:hover {
    height: auto;
    overflow: auto;
    text-overflow: unset;
  }

  p + p {
    margin-top: 15px;
  }
`
