import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  margin-top: -1rem; // -1rem strange white-space generated by the svg
  padding-bottom: 9rem;
  background-color: #f8f8f8;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem 2rem;
  }

  h2 {
    width: max-content;
    margin: auto;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    text-align: center;
    text-transform: capitalize;
  }

  .h2-border {
    display: block;
    width: 5.25rem;
    height: 4px;
    margin: 3px auto 2.5rem auto;
    border-radius: 5px;
    background-color: #3e4b9f;
  }
`;

export const StyledSingleProject = styled.div.attrs(() => ({
  as: "picture",
}))`
  transform-style: preserve-3d;
  width: 475px;
  max-width: 100%;
  height: max-content;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.75rem;
    padding: 1.5rem 1.75rem 2rem 1.75rem;
    color: #fff;
    border-radius: 4px;
    background: #242d62;
    //#202135
    transition: box-shadow 0.2s ease-out;

    &:hover {
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
    }

    h3 {
      display: inline-block;
      font-weight: 500;
    }

    .end-date {
      margin-left: 1rem;
      color: #a1a1a1;
      font-size: 0.95rem;
      @media screen and (max-width: 480px) {
        display: block;
        margin-left: 0;
      }
    }

    p {
      font-family: "Gotham LsLight";
      padding-right: 1.5rem;
      font-size: 14px; // 14.5px
      line-height: 1.7;
      letter-spacing: 0.25px;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;

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
      column-gap: 0.6rem;
      a {
        font-family: "Gotham LsLight";
        width: max-content;
        padding: 0.325rem 2rem;
        color: #fff;
        background-color: #1976d2;
        font-size: 0.9rem;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.1s ease-out;

        &:hover {
          background-color: #1342aa; //#1954d2
        }
      }

      svg {
        font-size: 16px;
      }
    }
    .project-image {
      height: 23rem;
      max-width: 100%;
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
      transition: all 300ms;
      transform-style: preserve-3d;
      transform: translate3d(0%, 0%, 0px);
    }
    &:hover .project-image {
      transform: translate3d(0%, 0%, 10px); //25px
    }
  }
`;
