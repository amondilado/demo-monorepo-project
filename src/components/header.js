// @flow
import * as React from "react"
import { Link } from "@demo/shared/dist/components"

type Props = {
  siteTitle?: string,
  id: Boolean,
}

const Header = ({ id, siteTitle }: Props) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link to="https://www.google.com" text=" | Shared lib Link component">
      {siteTitle}
    </Link>
  </header>
)

Header.defaultProps = {
  siteTitle: "",
}

export default Header
