import React from 'react'

export default function Footer() {
  let footerStyle={
    position : "relative",
    top : "5vh",
    width : "100%"

  }
  return (
    <footer className="bg-dark text-light p-1" style={footerStyle}>
      <h6 className="text-center">
        Copyright &copy; MySchedule
      </h6>
      <h6 className="text-center">
        Nitin Patel
      </h6>
    </footer>
  )
}