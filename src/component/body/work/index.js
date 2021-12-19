import React from "react";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../reusable/separator/index"
function Work() {
  const data = WorkData;
  return (
    <div id='work' className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;