import React from 'react'
import Data from'./itemsData'

function App(){
  const data =[{
    id:1,
    text:'one'
},
{
  id:2,
  text:'two'
},
{
  id:3,
  text:'three'
},
{
  id:4,
  text:'four'
},
{
  id:5,
  text:'five'
},
{
  id:6,
  text:'six'
},
{
  id:7,
  text:'seven'
},
{
  id:8,
  text:'eight'
},
{
  id:9,
  text:'nine'
},
{
  id:10,
  text:'ten'
},]
    const dataComponents = data.map(data => <Data 
     key={data.id} items={data} />)
    return(
      <div>
        {dataComponents}
      </div>
    )
  }


export default App;
