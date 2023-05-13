import { Button } from "@mui/material"
import { useEffect } from "react"

export default function Loop() {
  function loop2() {
    //
  }
  const loop = () => {
    let arr = [10, 20, 30, 40, 50]
    let word = "Hello World"

    // for (let index in arr) {
    //   console.log(index)
    // }
    //for (var char of word) {
    //console.log(char)//string
    //}

    // for (var i = 0; i < 4; i++) {
    //  console.log("value: " + i + "," + arr[i])
    // }

    // for (var i = 0; i < arr.length; i++) {
    //console.log("value: " + i + "," + arr[i])
    //}

    // for (var value of arr) {
    //  console.log("value: " + value)
    // }

    // for (var index in arr) {
    // console.log("index: " + index + "value: " + arr[index])
    // }
  }

  function whileLoop() {
    let i = 0
    while (i < 3) {
      console.log("value: " + i)
      i++
    }
  }

  function dowhileLoop() {
    let i = 2
    do {
      console.log("value: " + i)
      i++
    } while (i < 4)
  }

  return (
    <div>
      <Button onClick={dowhileLoop}>Loop</Button>
    </div>
  )
}
