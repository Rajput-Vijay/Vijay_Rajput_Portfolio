import React from "react";
import {
  StatsContCont,
  StatsCont,
  StatsContDiv,
  StatsContH1,
  StatsContH3,
  LastStat,
} from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
const Stats = () => {
  return (
    <Container>
      <StatsContCont>
        <StatsCont>
          <StatsContDiv>
            <StatsContH1>1200+</StatsContH1>
            <StatsContH3>Hours of coding</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>40+</StatsContH1>
            <StatsContH3>Git Commits</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>2+</StatsContH1>
            <StatsContH3>Projects</StatsContH3>
          </StatsContDiv>
          <LastStat>
            <StatsContH1>100+</StatsContH1>
            <StatsContH3>Hours of Soft Skill</StatsContH3>
          </LastStat>
        </StatsCont>
      </StatsContCont>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <img
        src="https://ghchart.rshah.org/021F34/Rajput-Vijay"
        alt="fdsdf"
        style={{ width: "80%", display: "block",filter:"contrast(2)", margin: "auto" }}
      /> */}
    </Container>
  );
};
export default Stats;
