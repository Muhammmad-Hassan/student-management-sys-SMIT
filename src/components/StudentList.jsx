
import StudentTable from "./StudentTable";


function StudentList({student, setStudent, getStudents }) {

  return (
    <>
      <h1>Students Lists</h1>
      <StudentTable student={student} setStudent={setStudent}/>
    </>
  );
}

export default StudentList;
