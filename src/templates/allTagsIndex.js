import React from 'react'
import { graphql, Link } from 'gatsby'

const AllTagsTemplate = ({ data, pageContext }) => {
    console.log(pageContext)
    //const { edges } = data.allMarkdownRemark
    return (
        <div>
            <div>
            TAGS HERE
            </div>
        </div>
    )
}

// export const query = graphql`
//     query HomepageQuery {
//         allMarkdownRemark(
//             sort: {order: DESC, fields: frontmatter___date}
//         ) {
//             edges {
//                 node {
//                     frontmatter {
//                         title
//                         path
//                         date
//                         excerpt
//                     }
//                 }
//             }
//         }
//     }
// `

export default AllTagsTemplate
