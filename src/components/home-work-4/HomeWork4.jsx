import { useState } from "react";
import styled from "styled-components";

export const HomeWork4 = () => {
  const [inputCall, setInputCall] = useState(false);

  const dd = () => {
    setInputCall(true);
  };
  return (
    <div>
      <TitleDiv>
        <p>Title</p>
        <InputDiv>
          <p>Kakaya to zadacha 55555</p>
          <SpanX onClick={dd} >{inputCall ? <input style={{width:"400px", height:"40px"}} type="text" placeholder="  ishtedi ))))"/> : "edit"}</SpanX>
        </InputDiv>
        <button>+ Add card</button>
      </TitleDiv>
    </div>
  );
};

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: blue;
`;
const InputDiv = styled.div`
  position: relative;
  border: 1px solid silver;
  background-color: aliceblue;
  width: 500px;
`;
const SpanX = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 20px;

  &:hover {
    color: red;
  }
`;
