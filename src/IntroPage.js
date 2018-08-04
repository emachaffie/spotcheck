import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

import PQlogo from './Media/PQlogo_rev-02.svg'
import cover1 from './Media/boyAndDog.jpg'
import cover2 from './Media/cover2.jpg'
import cover3 from './Media/cover3.jpg'
import cover4 from './Media/cover4.jpg'
import cover5 from './Media/cover5.jpg'

class IntroPage extends Component {
  getRandomPhoto () {
    const photoArray = [cover1, cover2, cover3, cover4, cover5]
    const photoindex = Math.floor(Math.random() * Math.floor(photoArray.length))
    const photoSource = photoArray[photoindex]
    return (<img className='introPageImage' src={photoSource} alt='Happy dog and owner' />)
  }

  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;Spot Check</h2>
          </header>
        </div>
        <div className='taglineDiv'>
          <p className='tagline'>Because <em>where</em> your pup comes from matters!</p>
        </div>
        <div className='introPageDiv'>
          <div className='introPageImgWrapper'>
            {this.getRandomPhoto()}
          </div>
          <ul className='introPageText'>
            <li><strong>Happy, healthy dogs</strong> come from quality shelters, breeders, and individuals.</li>
            <li><strong>Serious behavior and health problems</strong> are more likely if you get your dog from a bad source.</li>
            <li><strong>Quickly assess</strong> breeders, shelters, and individuals with <strong>Spot Check!</strong></li>
          </ul>
          <div className='navButtonDivIntro'>
            <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Let&apos;s Go!' />
          </div>
        </div>
      </div>
    )
  }
}

export default IntroPage
