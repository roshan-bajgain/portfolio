import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaAngellist} from 'react-icons/fi'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><FaGithubSquare /></a>
        <a href='https://angel.co'target="_blank"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocial