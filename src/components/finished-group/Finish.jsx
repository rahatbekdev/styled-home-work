import { Button } from "../UI/button/Button";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4,0fr);
  gap: 10px;
  width: 1000px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid red;
  border-radius: 10px;
  padding: 10px;
  background-image: url(https://t3.ftcdn.net/jpg/06/33/00/42/360_F_633004264_b6ZuRQZYAsZIEYfWdY15EAOiaG4ZJIbn.jpg);
`

export const Finish = () => {
  return (
    <Container>
      <ButtonBox>
        <Button size="sz1" variant="vr1">:HOVER</Button>
        <Button size="sz2" variant="vr2">:HOVER</Button>
        <Button size="sz3" variant="vr3">:HOVER</Button>
        <Button size="sz4" variant="vr4">:HOVER</Button>
        {/* ---- */}
        <Button size="sz5" variant="vr5">:NORMAL</Button>
        <Button size="sz6" variant="vr6">:NORMAL</Button>
        <Button size="sz7" variant="vr7">:NORMAL</Button>
        <Button size="sz8" variant="vr8">:NORMAL</Button>
        {/* ---- */}
        <Button size="sz9" variant="vr9">:ACTIVE</Button>
        <Button size="sz10" variant="vr10">:ACTIVE</Button>
        <Button size="sz11" variant="vr11">:ACTIVE</Button>
        <Button size="sz12" variant="vr12">:ACTIVE</Button>
        {/* ----- */}
        <Button size="sz13" variant="vr13">:DISABLED</Button>
        <Button size="sz14" variant="vr14">:DISABLED</Button>
        <Button size="sz15" variant="vr15">:DISABLED</Button>
        <Button size="sz16" variant="vr16">:DISABLED</Button>
        {/* ----- */}
        <Button size="sz17" variant="vr17">OUTLINED</Button>
        <Button size="sz18" variant="vr18">CONTAINED</Button>
        <Button size="sz19" variant="vr19">WARNING</Button>
        <Button size="sz20" variant="vr20">DANGER</Button>
      </ButtonBox>
    </Container>
  );
};
