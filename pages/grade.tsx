import GradeItem from "@/src/component/Gradeltem"

const example = [1, 2, 3, 4]
const subjects = [
  { subject: "Science", grade: 4 },
  { subject: "Math", grade: 3 },
  { subject: "English", grade: 3.5 },
]
export default function Grade() {
  return (
    <div>
      <GradeItem
        subject={subjects[0].subject}
        grade={subjects[0].grade}
      ></GradeItem>
      <GradeItem
        subject={subjects[1].subject}
        grade={subjects[1].grade}
      ></GradeItem>
      <GradeItem
        subject={subjects[2].subject}
        grade={subjects[2].grade}
      ></GradeItem>
    </div>
  )
}
