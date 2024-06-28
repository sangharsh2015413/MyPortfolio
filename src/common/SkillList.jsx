import React from 'react'

function SkillList({src,skill}) {
  return (
    <span>
        <img src={src} alt="checkMark Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList
