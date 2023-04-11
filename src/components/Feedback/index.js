// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isButtonClicked: false,
  }

  onClicked = () => {
    this.setState({isButtonClicked: true})
  }

  emojiCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-card">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button className="button" type="button" onClick={this.onClicked}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-type">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-u-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-u">Thank You!</h1>
        <p className="feedback-response">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isButtonClicked} = this.state
    return (
      <div className="bg-color">
        {isButtonClicked === false ? this.emojiCard() : this.thankYouCard()}
      </div>
    )
  }
}
export default Feedback
