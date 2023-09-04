// Write your code here
// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="NotFound-container">
    <Header />
    <div className="NotFound-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />

      <h1>Lost Your Way</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
