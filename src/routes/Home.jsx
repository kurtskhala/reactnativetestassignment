import React from 'react'
import { Link } from 'react-router-dom'
import array1 from '../data/Array_1.json'
import array2 from '../data/Array_2.json'

export const Home = () => {

  //1 
  function arraySwitcher(arr) {
    const newArr = [];
    for(let i=0; i<arr.length; i=i+2) {
      newArr.push(arr[i+1]);
      newArr.push(arr[i]);
    }
    return newArr.toString();
  }

  //2
  function maxNumDiff(arr) {
    let maxNum = 0;
    for(let i=0; i<arr.length; i++) {
      for(let j=i; j<arr,length; j++) {
        if((arr[j] - arr[i]) > maxNum) {
          maxNum = arr[j] - arr[j];
        }
      }
    }
    return maxNum;
  }



  const combinedArr = [...array1, ...array2];
  const newArr = [];
  for(let i=0; i<combinedArr.length; i++) {
    for(let j=0; j<newArr.length; j++) {
      if(!(combinedArr[i].id === newArr[j].id && combinedArr[i].body === newArr[j].body && combinedArr[i].name === newArr[j].name)) {
        newArr.push(combinedArr[i]);
      }
    }
  }
  console.log(newArr);
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
