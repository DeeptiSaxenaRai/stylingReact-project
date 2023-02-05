import BasicSkill from "./BasicSkill";
import styles from "./employee.module.css";

// Make the component for job position
function Position() {
  return <h3>FrontEnd Developer</h3>;
}

// Make the component for employee
function Employee(prop) {
  return (
    <div className={styles.employee}>
      <h2>Name : {prop.name}</h2>
      <img className={styles.image} src={prop.imgsrc} alt="" />
      <Position />
      <BasicSkill />
    </div>
  );
}
export default Employee;
