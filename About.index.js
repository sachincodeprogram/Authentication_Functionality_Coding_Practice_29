// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about">
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default About




/* Write your CSS code here */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
}

