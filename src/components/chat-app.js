import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageList from './message-list.js';

const instanceLocator = 'v1:us1:fb1efffd-18a0-42a2-87a3-2ba8787b1259';
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fb1efffd-18a0-42a2-87a3-2ba8787b1259/token';
const username = 'corey';
const roomId = '15425720';

const DUMMY_DATA = [
  {
    senderId: 'corey',
    text: 'what do you think of dollar shave club?'
  },
  {
    senderId: 'jeff',
    text: 'it is awesome'
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: DUMMY_DATA
    }
  }


  render() {
    return (
      <div className="app">
      <Title />
      <MessageList messages={this.state.messages}/>
      <SendMessageForm />
      </div>
    )
  }
}

export default App;
