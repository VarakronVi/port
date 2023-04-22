export default function Home() {
  return (
    <div style={{ backgroundColor: "#1E3155", flexDirection: "column" }}>
      <div>
        <h1
          style={{
            fontSize: 50,
            fontFamily: "Arial",
            color: "white",
            paddingTop: "50px",
            paddingLeft: "350px",
          }}
        >
          My profile
        </h1>
        <div>
          <h2
            style={{
              fontSize: 20,
              fontFamily: "Arial",
              color: "white",
              paddingLeft: "350px",
            }}
          >
            name: Varakron Vimolgranjana
            <p>Date of Birth: 3 Jan 2007</p>
            <p>Nationality: Thai</p>
          </h2>
          <div>
            <h3
              style={{
                fontSize: 30,
                fontFamily: "Arial",
                color: "white",
                paddingLeft: "350px",
              }}
            >
              My Skills
              <p style={{ fontSize: 20 }}>Musical Instruments</p>
              <p style={{ fontSize: 15 }}>- trumpet</p>
              <p style={{ fontSize: 15 }}>- guitar</p>
              <p style={{ fontSize: 15 }}>- Ukulele</p>
              <p style={{ fontSize: 15 }}>- piano</p>
              <p style={{ fontSize: 20 }}>Drawing</p>
              <p style={{ fontSize: 20 }}>Technology</p>
              <p style={{ fontSize: 15 }}>- Adobe Illustrator</p>
              <p style={{ fontSize: 15 }}>- Adobe Photoshop</p>
              <p style={{ fontSize: 20 }}>Coding</p>
              <p style={{ fontSize: 15 }}>- Python</p>
              <p style={{ fontSize: 15 }}>- VS code</p>
            </h3>
          </div>
        </div>
      </div>
      <img src="dog.jpeg" alt="Noolee" width="200" height="210" />
    </div>
  )
}
