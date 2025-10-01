import { githubUsername } from '@/types/constants'
import { Repository } from '@/types/repo'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const username = githubUsername

export default async function api() {
  //1.SSG
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  //2.SSR
  // const response = await fetch(
  //   `https://api.github.com/users/${username}/repos`,
  //   { cache: 'no-store' }
  // )
  //3.ISR
  // const response = await fetch(
  //   `https://api.github.com/users/${username}/repos`,
  //   { next: { revalidate: 60 } }
  // )
  //const response = await fetch(`https://api.github.com/users/${username}/repos`, {next: {revalidate: 10}})
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos = await response.json()
  //console.log(repos)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github repositories of {username}
      </h2>
      <ul>
        {repos.map((repo: Repository) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.dscription}</p>
              <div className="flex justify-between items-center mt-2">
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
