import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, description }) => (
  <header>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        margin: `1.45rem 0 1.45rem 0`,
      }}
    >
      <h1
        style={{
          margin: "0 0 1.25rem 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" className="links">
          {siteTitle}
        </Link>
      </h1>
      <h5 style={{ display: "flex", justifyContent: "center" }}>
        {description}
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
