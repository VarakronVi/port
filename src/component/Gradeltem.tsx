import { Button, Rating } from "@mui/material"
import style from "../../styles/gradeItem.module.css"
import { Content } from "next/font/google"
import { useState } from "react"

// Data from grade page
interface subjectData {
  subject: string
  grade: number
}

export function GradeItem(props: subjectData) {
  const [mySubject, setMySubject] = useState(props.subject)
  const [grade, setGrade] = useState(props.grade)

  const clikeChangeSubject = () => {
    setMySubject("New Subject")
    console.log(mySubject)
  }
  const clikeMinusGrade = (value1: number, value2: number, word: string) => {
    let calGrade = grade - value1 - value2
    setGrade(calGrade)
    console.log("Word:" + word)
    console.log("Value1:" + value1)
    console.log("Value2:" + value2)
  }
  return (
    <div className={style.grade_item}>
      <div className={style.grade_item_description}>
        <h2>{mySubject}</h2>
        <div className={style.grade_item_price}>Grade: {grade}</div>
      </div>
      <Rating name="grade" value={grade} precision={0.5} max={4} readOnly />
      <Button variant="contained" onClick={() => clikeChangeSubject()}>
        Change Subject
      </Button>

      <Button
        variant="contained"
        onClick={() => clikeMinusGrade(0.2, 0.1, "0.4")}
      >
        Minus Grade
      </Button>
    </div>
  )
}

export default GradeItem
