import React from 'react'
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill} from 'react-icons/ri'
  import Link from 'next/link';
  const icons = [
    {
      path:'/',
      name: <RiGithubFill/>
    },
    {
      path:'/',
      name: <RiFacebookFill/>
    },
    {
      path:'/',
      name: <RiLinkedinFill/>
    },
    {
      path:'/',
      name: <RiYoutubeFill/>
    }
  ]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
     { icons.map((icon, index) => {
      return <Link href={icon.path} key={index}>
        <p className={`${iconStyles}`}>{icon.name}</p>
      </Link>
     })}
    </div>
  )
}

export default Socials