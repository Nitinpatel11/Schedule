// import

import React from 'react'

// Create function for footer

export default function Footer() {
  let footerStyle={
    position : "relative",
    bottom : "0",
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
