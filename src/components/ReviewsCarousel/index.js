import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeft = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const {username, companyName, description, imgUrl} = reviewsList[
      activeIndex
    ]

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Reviews</h1>
          <img className="images" alt={username} src={imgUrl} />
          <div className="name-and-button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeft}
              testid="leftArrow"
            >
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              type="button"
              className="button"
              onClick={this.onClickRight}
              testid="rightArrow"
            >
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="container">
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
