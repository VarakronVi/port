import { Button, Input } from "@mui/material"
import handler from "./api/hello"
import { SetStateAction, useEffect, useState } from "react"
import Nav from "@/src/component/Nav"

export default function Grade() {
  const [score, setScore] = useState("0")
  const [grade, setGrade] = useState("")

  useEffect(() => {
    calculateGrade()
  }, [score])

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setScore(event.target.value)
  }
  function calculateGrade() {
    if (Number(score) >= 90) {
      setGrade("S")
    } else if (Number(score) >= 80) {
      setGrade("A")
    } else if (Number(score) >= 70 && Number(score) < 80) {
      setGrade("B")
    } else if (Number(score) >= 60 && Number(score) < 70) {
      setGrade("C")
    } else {
      setGrade("F")
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Input
          type="text"
          placeholder="Score"
          onChange={handleChange}
          value={score}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            calculateGrade()
          }}
          variant="contained"
        >
          Confirm
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "200px", color: "#376CCA " }}>{grade}</h1>
      </div>
    </div>
  )
}
