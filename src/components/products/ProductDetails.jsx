import styles from './product-details.module.css'
//module based styling ,Useful to avoid conflicts when multiple components use the same class names.
//here styles is the object 

const ProductDetails =({Desc,Price})=>{
  
    return(
        <>
       <div className={styles.buttonStyle}>
        <h3 style={{backgroundColor:'blue',border:'2px solid red '}}> The Description is {Desc}</h3> {/* Inline Css*/}
        <h2> The Price is {Price}</h2>

       </div>
        </>
    )

}
export default ProductDetails