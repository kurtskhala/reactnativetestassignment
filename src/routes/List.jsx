import React from 'react'
import array from '../data/Array_2.json'
export default function List() {
  return (
    <div>
     {
      array.map((user) => <Card key = {user.id} data = {user} />)
     }
    </div>)
}
