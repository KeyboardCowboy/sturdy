/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/chris.jpeg"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>Hi, I'm Chris and I love hats.</strong>  KeyboardCowboy in the world of web development, Sturdy the cowboy tour guide around town, and just Chris at home: husband, entrepreneur, lover of the outdoors and aspiring minimalist.  These are my thoughts on life.
        </p>
      )}
    </div>
  )
}

export default Bio
