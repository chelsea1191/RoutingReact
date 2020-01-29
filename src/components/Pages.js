import React from "react";

export default function Pages({ allUsers }) {
  let pages = []
  const total = Math.ceil(allUsers.count / 50)
  for (let i = 1; i < total; i++) {
    pages.push(<a key={i} href={`#view=users&idx=${i}`}>{i}</a>)
  }

  return <div className="pagination">{pages}</div>
}
