import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  margin: -1rem auto 5.5rem auto; // -1rem strange white-space generated by the svg
  padding-bottom: 1.5rem;
  background-color: #eeeeee;

  h2 {
    width: max-content;
    margin: auto;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0.3px;
    text-align: center;
    text-transform: capitalize;
  }

  .h2-border {
    display: block;
    width: 5rem;
    height: 3px;
    margin: 3px auto 1rem auto;
    border-radius: 5px;
    background-color: #3e4b9f;
  }
`;

export const StyledSingleProject = styled.div.attrs(() => ({
  as: "picture",
}))`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
  transform-style: preserve-3d;

  .box {
    display: flex;
    justify-content: space-between;
    width: 690px;
    height: 290px;
    margin: 38px 0;
    padding: 2rem;
    color: #fff;
    border-radius: 3px;
    background: #242d62;
    //#202135, 2(#3d478b), 3(#3f4b99), 4(#3a479b), 5(#4b57a4)
    //#242d62
    transition: box-shadow 0.2s ease-out;
    &:hover {
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
    }

    .container-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.8rem 0.5rem 0.8rem 0;
      transform-style: preserve-3d;

      h3 {
        font-weight: 500;
      }

      p {
        font-family: "Gotham LsLight";
        margin: 0.6rem 0 1.5rem 0;
        padding-right: 1.5rem;
        font-size: 14px; // 14.5px
        line-height: 1.7;
      }

      .technologies {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.8rem;

        span {
          font-family: "Gotham LsLight";
          margin: 2.5px 3.5px;
          padding: 1.5px 9px;
          border-radius: 2px;
          font-size: 13px;
          background-color: rgba(255, 255, 255, 0.1); //0.14
        }
      }

      .links-buttons {
        display: flex;
        a {
          font-family: "Gotham LsLight";
          width: max-content;
          margin-right: 0.6rem;
          padding: 0.25rem 1.2rem;
          background-color: #1976d2;
          border-radius: 5px;
          font-size: 13px;
          color: #fff;
          text-decoration: none;
          transition: background-color 0.15s ease-out;

          &:hover {
            background-color: #1342aa; //#1954d2
          }
        }

        svg {
          font-size: 16px;
        }
      }
    }

    img {
      height: 100%;
      border-radius: 3px;
      transition: all 300ms;
      transform-style: preserve-3d;
      transform: translate3d(0%, 0%, 0px);
    }
    &:hover img {
      transform: translate3d(0%, 0%, 25px); //25px
    }
  }
  * {
    transform-style: preserve-3d;
  }
`;