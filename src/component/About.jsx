import './About.css'
import { useParams } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import Card from './Card'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const About = ({Data,search,handleClick,data}) => {
    const {aboutId}=useParams()
    const data1 = Data.find((data1)=>data1.id==parseInt(aboutId))
  return (
    <div className='About'>
        <div className='right'>
        <Tilt options={defaultOptions}>
           <img src={data1.image} height={'400px'} width={'400px'} />
        </Tilt>
        </div>
        <div className='left'>
            <h1>{data1.title}</h1>
            <p>{data1.description}</p>
            <p>{data1.price}</p>
            <p>{data1.rating.rate}⭐</p>
        </div>
        <div className='sec'>
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card key={item.id} item={item} handleClick={handleClick}/>
            )
        })}
        </div>
    </div>
  )
}

export default About