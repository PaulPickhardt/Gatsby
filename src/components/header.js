import React from "react"
import { Link } from "gatsby"
export default props => (
  <div>
    <h1>{props.headerText}</h1>
    <div>
      <Link to="/">Home </Link>
    </div>
    <div>
      <Link to="/contact/">Contact</Link>
    </div>
  </div>
)
