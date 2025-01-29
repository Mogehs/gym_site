import React from "react";
import { GiNextButton } from "react-icons/gi";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <span className="left-span" />
        <p className="text-btn">READ MORE</p>
        <p className="hidden-text-btn text-center text-2xl">→</p>
        <span className="right-span" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
    border: none;
    display: flex;
    align-items: center;
    background: #ff0336;
    color: #fff;
    transition: all 100ms;
    overflow: hidden;
    height: 50px;
    width: 170px;
  }

  .left-span {
    position: absolute;
    left: 0;
    height: 50px;
    width: 15px;
    border-top: 1px solid #f93d21;
    border-bottom: 1px solid #f93d21;
    border-left: 1px solid #f93d21;
    transition: all 500ms;
  }

  .right-span {
    position: absolute;
    right: 0;
    height: 50px;
    width: 15px;
    border-top: 1px solid #f93d21;
    border-bottom: 1px solid #f93d21;
    border-right: 1px solid #f93d21;
    transition: all 500ms;
  }

  .text-btn {
    position: absolute;
    transform: translateX(0px);
    width: 110px;
    transition: all 200ms;
  }

  .hidden-text-btn {
    position: absolute;
    transform: translateX(150px);
    opacity: 0;
    transition: all 200ms;
  }

  .btn:hover .text-btn {
    transform: translateX(-150px);
    opacity: 0;
  }

  .btn:hover .hidden-text-btn {
    transform: translateX(0px);
    opacity: 1;
  }

  .btn:hover .right-span,
  .btn:hover .left-span {
    width: 100%;
  }
`;

export default Button;
