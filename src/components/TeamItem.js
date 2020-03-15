import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title, description, linkedin }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px" />
        <h3 className="mt-5">{title}</h3>
        <p>{description}</p>
        <SocialIcon className="mr-4" url={linkedin} />
      </div>
    </Fade>
  )
}

export default TeamItem
