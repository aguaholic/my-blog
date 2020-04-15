import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir'
        }}>
            <h2 style={{ marginBottom: 0 }}>{title}</h2>
            <p  style={{
                marginTop: 0,
                opacity: 0.5            
            }}>
                {description}
            </p>
        </div>
    )
}

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )
    return (
      <TitleAndDescription data={data} />
    )
}

export default Header
