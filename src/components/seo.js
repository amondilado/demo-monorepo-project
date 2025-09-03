import * as React from "react"

function Seo({ description, title, children }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
}

export default Seo
