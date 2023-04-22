import Image from "next/image"
import { Inter } from "next/font/google"
import { Http2ServerRequest } from "http2"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div style={{ backgroundColor: "#1E3155" }}>
      <h1
        style={{
          fontSize: 25,
          fontFamily: "Arial",
          color: "#53DEBC ",
          padding: "5px",
          paddingTop: "70px",
          marginLeft: "60px",
          marginTop: "200px",
        }}
      >
        Hi, my name is
      </h1>
      <div>
        <h2
          style={{
            fontSize: 50,
            fontFamily: "Arial",
            color: "white",
            padding: "5px",
            marginLeft: "60px",
            marginTop: "20px",
            marginBlockEnd: "1px",
          }}
        >
          Varakron Vimolgranjana.
        </h2>
        <div>
          <h3
            style={{
              fontSize: 50,
              fontFamily: "Arial",
              color: "#E0E0E0",
              padding: "5px",
              paddingBlockEnd: "30px",
              marginLeft: "60px",
              marginTop: "5px",
            }}
          >
            I aspire to a career as a computer engineer.
            <p
              style={{
                fontSize: 16,
                color: "#E0E0E0",
              }}
            >
              I am a student currently enrolled at St. Francis Xavier Convent
              School, majoring in science and mathematics.
              <p
                style={{
                  fontSize: 16,
                  color: "#E0E0E0",
                  marginTop: "10px",
                }}
              >
                My ambition is to become a computer engineer owing to my
                profound interest in coding and mt observation that technology
                is advancing exponentially,indicating a high demand for
                competent computer engineers in the future job market.
                <p>
                  <Link href={"/portfolio"}>
                    <button
                      style={{
                        background: "#1E3155",
                        color: "#DEF1ED",
                        marginTop: "30px",
                        borderBlockStyle: "dashed",
                        borderBlockColor: "#53DEBC",
                        fontFamily: "Arial",
                        fontSize: 16,
                      }}
                    >
                      Get In Touch
                    </button>
                  </Link>
                </p>
              </p>
            </p>
          </h3>
        </div>
      </div>
    </div>
  )
}
