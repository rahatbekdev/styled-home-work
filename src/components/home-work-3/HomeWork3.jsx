import { useState } from "react";
import styled from "styled-components";

export const HomeWork3 = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(false);

  const f2 = () => {
    setCount((prev) => prev + 1);
    setColor(false)
  };

  const f1 = () => {
    setCount((prev) => prev - 1);
    if (count <= 0) {
      setColor(true);
      return;
    }
  };
  return (
    <div>
      <div>
        <Div2>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBYpFOY4Mb9EnIQzBuE12w5JpSA-E9DbaJcBaCnbngg&s"
              alt=""
            />
          </div>
          <div>
            <h1>Samsung Galaxy S21 128gb синий </h1>
            <h2>9(MLP3RU)</h2>
            <div>
              <p>рейтинг</p>
              <p>*****</p>
              <p>138</p>
            </div>
            <p>в наличии (55)</p>
            <p>Kod tovara 393478</p>
          </div>
          <div>
            <CountDiv>
              <Span22 onClick={f1}>-</Span22>
              <Span1 style={{color:color ? "red" : ""}}>{count}</Span1>
              <Span22 onClick={f2}>+</Span22>
              <Span3>104 900</Span3>
            </CountDiv>
            <DeleteDiv>
              <p>v izbrannom</p>
              <p>udalit</p>
            </DeleteDiv>
          </div>
        </Div2>
      </div>
    </div>
  );
};

const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
`;

const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteDiv = styled.div`
  display: flex;
`;
const Span22 = styled.span`
  cursor: pointer;
  border: 1px solid silver;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    background-color: silver;
  }
`;
const Span1 = styled.span`
  font-size: 25px;
  margin: 0 5px;
`;
const Span3 = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding-left: 15px;
`;
