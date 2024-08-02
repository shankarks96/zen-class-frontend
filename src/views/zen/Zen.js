/* eslint-disable prettier/prettier */
import React,{useState} from 'react'

function Zen() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')

  const sendMessage = async () => {
    const apiUrl = 'https://api.zen-gpt.com/chat' // Replace with your actual API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json()
      const newMessages = [
        ...messages,
        { text: inputText, fromUser: true },
        { text: data.reply, fromUser: false },
      ]
      setMessages(newMessages)
      setInputText('')
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <div className="container-fluid p-3">
      <div className="row mb-3">
        <div className="col-auto">
          <button className="btn btn-light" title="Close Sidebar">
            <img
              className="p-2"
              width="50px"
              height="50px"
              src="/Icons/close-menu.svg"
              alt="close"
            />
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-light"
            title="A fresh chat already exists"
            style={{ cursor: 'not-allowed' }}
            disabled
          >
            <img
              className="p-2"
              width="50px"
              height="50px"
              src="/Icons/disable-chat.svg"
              alt="chat"
            />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Today</h5>
              <div className="card mb-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <img className="title-icon" src="/Icons/zen-gpt.svg" alt="delete" />
                    New Chat
                  </div>
                  <button className="btn btn-link">
                    <img className="delete-icon" src="/Icons/deleteRed.svg" alt="delete" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <img className="title-icon" src="/Icons/zen-gpt.svg" alt="delete" />
                    Sure, please go ahead
                  </div>
                  <button className="btn btn-link">
                    <img className="delete-icon" src="/Icons/deleteRed.svg" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 d-flex flex-column pl-3">
          <div className="text-center mb-4">
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Zen-GPT</h1>
            <p style={{ fontSize: '1rem', color: '#666' }}>
              The Technical Doubt Solver featuring Zen-GPT: Instant answers to all your technical
              queries, making learning easier than ever.
            </p>
          </div>
          <div
            className="card flex-grow-1 mb-3"
            style={{ overflowY: 'auto', padding: '30px', backgroundColor: '#f9f9f9' }}
          >
            <div className="row d-flex justify-content-around">
              <div className="col-auto">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <img src="/Icons/new-chat.svg" alt="Experience Seoul" className="mb-2" />
                    <p>What is MERN Stack Development?</p>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <img src="/Icons/new-chat.svg" alt="Make a personal webpage" className="mb-2" />
                    <p>What is Data Science?</p>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <img src="/Icons/new-chat.svg" alt="Explain superconductors" className="mb-2" />
                    <p>What is UI/UX?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-grow-1"
            style={{
              overflowY: 'auto',
              padding: '30px',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} className={msg.fromUser ? 'text-right mb-3' : 'text-left mb-3'}>
                <div className={`card ${msg.fromUser ? 'bg-primary text-white' : 'bg-light'}`}>
                  <div className="card-body">
                    <p>{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form
            className="d-flex align-items-center p-3"
            style={{ borderTop: '1px solid #ddd' }}
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
          >
            <textarea
              className="form-control"
              rows="1"
              placeholder="Ask your doubt"
              style={{ resize: 'vertical', borderRadius: '50px' }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary ml-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Zen
