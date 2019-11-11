import React from "react"
import Header from "../components/header"
export default props => {
  console.log(props)
  return (
    <div style={{ color: `white` }}>
      <Header headerText="About Gatsby" />
      <h1>{props.id}</h1>
    </div>
  )
}
