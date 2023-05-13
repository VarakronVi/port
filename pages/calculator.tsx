import { Button } from "@mui/material"
import { useState } from "react"

export default function Calculator() {
  const [first, setFirst] = useState(0)
  const clickAddNumber = () => {
    setFirst(first + 1)
  }
  const clickMinusNumber = () => {
    setFirst(first - 1)
  }

  const [sec, setSec] = useState(0)
  const clickAddNumSec = () => {
    setSec(sec + 1)
  }
  const clickMinusNumSec = () => {
    setSec(sec - 1)
  }
  const [sum, setSum] = useState(0)
  const clickSum = () => {
    setSum(first + sec)
  }
  const [Minus, setMinus] = useState(0)
  const clickMinus = () => {
    setSum(first - sec)
  }
  const [Multiply, setMultiply] = useState(0)
  const clickMultiply = () => {
    setSum(first * sec)
  }
  const [Divide, setDivide] = useState(0)
  const clickDivide = () => {
    setSum(first / sec)
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>{first}</h1>
        <div>
          <Button
            variant="contained"
            onClick={() => clickAddNumber()}
            style={{ margin: "10px" }}
          >
            +
          </Button>
          <Button variant="contained" onClick={() => clickMinusNumber()}>
            -
          </Button>
        </div>
      </div>

      <h1 style={{ alignContent: "center" }}>+</h1>

      <div style={{ justifyContent: "center" }}>
        <h1>{sec}</h1>
        <div>
          <Button
            variant="contained"
            onClick={() => clickAddNumSec()}
            style={{ margin: "10px" }}
          >
            +
          </Button>
          <Button variant="contained" onClick={() => clickMinusNumSec()}>
            -
          </Button>
        </div>
      </div>

      <h1 style={{ paddingRight: "10px" }}>=</h1>

      <div style={{ justifyContent: "center" }}>
        <h1>{sum}</h1>
        <Button
          variant="contained"
          onClick={() => clickSum()}
          style={{ margin: "10px" }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={() => clickMinus()}
          style={{ margin: "10px" }}
        >
          -
        </Button>
        <Button
          variant="contained"
          onClick={() => clickMultiply()}
          style={{ margin: "10px" }}
        >
          *
        </Button>
        <Button
          variant="contained"
          onClick={() => clickDivide()}
          style={{ margin: "10px" }}
        >
          /
        </Button>
      </div>
    </div>
  )
}
