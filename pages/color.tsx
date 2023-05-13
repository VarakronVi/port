import { Button, Input } from "@mui/material"
import { SetStateAction, useEffect, useState } from "react"

export default function Color() {
  const [color, setColor] = useState("white")
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  function changeColor() {
    setColor("red")
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setColor(event.target.value)
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="color"
        onChange={handleChange}
        value={color}
      />
      <Button
        onClick={() => {
          changeColor()
        }}
        variant="contained"
      >
        Change Color
      </Button>
    </div>
  )
}
