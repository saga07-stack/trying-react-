import React from 'react'
const messageCount = 1;
const App = () => {
  return (
    <div>
      {messageCount >=1  && <h1>New Message Received</h1>}
    </div>
  )
}

export default App
