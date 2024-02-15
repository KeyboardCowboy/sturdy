/**
 * Format the publication and revision dates for a post.
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const PubDate = ({dates}) => {
  return (
      <div className="pub-date">
                <span className="metadata--date">
                  <span className="metadata--date-prefix">Published: </span>
                  <time dateTime={dates?.pubDateTime}>{dates?.pubDate}</time>
                </span>
        {dates?.revDate &&
            <span className="metadata--date">
                  <span className="metadata--date-prefix">Revised: </span>
                  <time dateTime={dates?.revDateTime}>{dates?.revDate}</time>
                </span>
        }
      </div>
  )
}

export default PubDate
