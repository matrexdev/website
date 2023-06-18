import ReactIcon from "./icon/React";
import JavaIcon from "./icon/Java";
import JsIcon from "./icon/Javascript";
import CssIcon from "./icon/CSS";
import HtmlIcon from "./icon/HTML";
import NodeIcon from "./icon/Node";
import CIcon from "./icon/CSharp";
import MongoIcon from "./icon/Mongo";

export default function tech() {
  return (
    <div className="techIUse">
      <h2 className="techTitle">Technologies I Use</h2>
      <div className="techButtons">
        <span className="tech">
          <ReactIcon />
          <span> React.js</span>
        </span>
        <span className="tech">
          <JavaIcon />
          <span> Java</span>
        </span>
        <span className="tech">
          <JsIcon />
          <span>Javascript</span>
        </span>
        <span className="tech">
          <CssIcon />
          <span>CSS</span>
        </span>
        <span className="tech">
          <HtmlIcon />
          <span>HTML</span>
        </span>
        <span className="tech">
          <NodeIcon />
          <span>Node.js</span>
        </span>
        <span className="tech">
          <CIcon />
          <span>C#</span>
        </span>
        <span className="tech">
          <MongoIcon />
          <span>MongoDB</span>
        </span>
      </div>
    </div>
  );
}
