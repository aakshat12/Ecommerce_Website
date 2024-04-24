import React from 'react'
import {FaShoppingCart,FaRegBookmark,FaStar,FaFileAlt, FaFireAlt} from 'react-icons/fa'
import {useStateValue} from './StateProvider'

function Products( props) {

  const[state,dispatch] = useStateValue();
 
  function addProduct() {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: props.id,
        title: props.title,
        image: props.image,
        rating: props.rating,
        price: props.price
      }
    }

    )

  }

 

  return (
    // <div className='d-flex flex-column'>
    //   <h4 >{props.title}</h4>
    //   <strong>${props.price}</strong>
    //   <p>
    //     {Array(props.rating) .fill().map((_,i) =>(
    //       <span>⭐</span>
    //     ))}
    //   </p>
    //   <div className='d-flex flex-column align-items-center'  >
    //   <img src={`/Assests/${props.image}`} className='w-50 mt-1' alt="PC" style={{position:"relative",width:"450px", height:"200px"}}  />
    //   <button onClick={addProduct} className='btn btn-warning w-auto mt-3'>Add Product</button>
    //   </div>
    // </div>
    <div className='productList'>
      <div key={props.id} className='productCard'>
        <img src={`/Assests/${props.image}`} alt='product-image' className='productImage' style={{ width: '200x', height: '200px' }} ></img>
    
        <div  className='productCard_content'>
          <h3 className='productName'style={{ fontSize: '16px' }}>{props.title} </h3>
          <div className='displayStack_1'>
            <div className='productPrice'>${props.price}</div>
            <div className='productSale'>{props.totalsales}</div>

          </div>
          <div className='displayStack_2'>
            <div className='productRating'>
           { [...Array(props.rating)].map((index) =>(
            <FaStar id={index+1} key={index}/>

           )) }
         
            </div>
           
            <div className='ProductTime'>{props.timeleft}days left</div>
            <button onClick={addProduct} className='btn btn-warning w-auto mt-3'>Add Product</button>

          </div>

        </div>
      </div>

    </div>

  )
}

export default Products