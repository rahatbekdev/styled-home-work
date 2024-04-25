import styled from "styled-components";
import { HomeWork3 } from "./HomeWork3";

export const WorkGroup = () => {
  return (
    <div>
      <Boxes>
        <HomeWork3 />
        <br />
        <HomeWork3 />
      </Boxes>
    </div>
  );
};

const Boxes = styled.div`
background-color: #96a7b6;
`
