import { Button, Rating } from "@mui/material"
import style from "../../styles/gradeItem.module.css"

// Data from grade page
interface subjectData {
  subject: string
  grade: number
}

function GradeItem(props: subjectData) {
  const clikeChangeSubject = () => {
    console.log("CLICK BUTTON")
  }
  return (
    <div className={style.grade_item}>
      <div className={style.grade_item_description}>
        <h2>{props.subject}</h2>
        <div className={style.grade_item_price}>Grade: {props.grade}</div>
      </div>
      <Rating
        name="grade"
        value={props.grade}
        precision={0.5}
        max={4}
        readOnly
      />
      <Button variant="contained" onClick={() => clikeChangeSubject()}>
        Change Subject
      </Button>
    </div>
  )
}

export default GradeItem
