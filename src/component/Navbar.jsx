import {Link} from 'react-router-dom';
import './navbar.css'

const Navbar = ({setSearch,size,data,setData}) => {

  const filterResult1 = (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }

  const filterResult2 = (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }

  const filterResult3 = (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }

  const filterResult4 = (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }
  
  return (
    <div>
        <nav className='navbar'>
            <article className='navart'>
                <div className='navlogo'><Link style={{color:'white',textDecoration:'none'}} to='/'><img src="https://www.zudio.com/cdn/shop/files/logo_300x300.png?v=1613519896" alt="" height={'20px'} width={'100px'}/></Link></div>
                <div className='inputnav'><input onChange={(e)=>setSearch(e.target.value)} type='search' placeholder='Search Your Products'></input></div>
                <div className='navdiv'><Link style={{color:'white',textDecoration:'none'}} to='/cart'><img src="https://www.jiomart.com/assets/ds2web/jds-icons/cart-icon.svg" alt="" height={'30px'} width={'30px'}/><sup>{size}</sup></Link></div>
            </article>
            <article className='Artbtn'>
              <button className='navbtn' onClick={()=>filterResult1(`men's clothing`)}>Men</button>
              <button className='navbtn' onClick={()=>filterResult2(`women's clothing`)}>Women</button>
              <button className='navbtn' onClick={()=>filterResult3(`electronics`)}>Electronics</button>
              <button className='navbtn' onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
              
            </article>
        </nav>
    </div>
  )
}

export default Navbar

