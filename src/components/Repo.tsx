import Link from 'next/link'
import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

interface RepoProps {
  name: string
}

export default async function Repo({ name }: RepoProps) {
  const username = 'Kwaknamho'
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )
  const repo = await response.json()
  return (
    <div>
      <h3 className="txet-xl font-bold">
        <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
      </h3>
      <p>{repo.desciptiion}</p>
      <div className="flex justify-between tems-center mb-4">
        <span className="fles items-center gap-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="fles items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="fles items-center gap-1">
          <FaEye /> {repo.watchers_count}
        </span>
      </div>
    </div>
  )
}
