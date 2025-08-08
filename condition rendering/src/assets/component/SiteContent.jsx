import React from 'react'

const SiteContent = ({isUnderMaintenance}) => {
    if(isUnderMaintenance) return null;
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur <br />
         adipisicing elit. Sapiente aliquam sit eaque quasi, <br />
        odio velit molestiae consectetur quisquam <br />
        a porro repudiandae non quia, ratione omnis <br />
        praesentium, suscipit quo exercitationem tempore.</h1>
    </div>
  )
}

export default SiteContent
