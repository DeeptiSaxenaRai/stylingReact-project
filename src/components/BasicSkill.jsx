import skills from "./BasicSkill.module.css"; //import css module file
// Imports all the icons which we needed
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

// To make components for skills
function BasicSkill() {
  return (
    <div className={skills.basicSkill}>
      <DiJavascript size={"30px"} />
      <SiJavascript size={"30px"} />
      <FaReact size={"30px"} />
    </div>
  );
}
export default BasicSkill;
