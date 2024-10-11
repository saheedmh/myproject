import React from 'react'

function Rainbow(Wrappedcomponent) {
    const colours = ['red', 'green', 'blue', 'black', 'pink', 'yellow']
    const randomColor = colours[Math.floor(Math.random() * 5)]
    const className = randomColor = '-text';
    return (props) =>{
  return (
    <div>
      <div className={className}>
        <Wrappedcomponent {...props}/>
      </div>
    </div>
  )
}
}
export default Rainbow
