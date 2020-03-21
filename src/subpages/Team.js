import React from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            img
            description
            linkedin
          }
        }
      }
    }
  `)
  return (
    <div id = "team" className="container-fluid" 
      style={{
        backgroundColor: "#1E251F",
        color: "white",
        padding: "50px 0px 30px",
      }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Meet Our Team </h1>
          <div className="row my-5">
            {allTeamYaml.edges.map(({ node }) => {
              return <TeamItem title={node.name} src={node.img} description={node.description} linkedin={node.linkedin} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
