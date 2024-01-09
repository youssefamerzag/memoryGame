import React, { useEffect, useRef, useState } from "react";

const App = () => {

  const imgs = [
    {id : 0 , key : 0 , src : 'imgs/html.png' , disponible : true},
    {id : 1 , key : 1 , src : 'imgs/mongodb.png', disponible : true},
    {id : 1 , key : 2 , src : 'imgs/nodejs.png', disponible : true},
    {id : 3 , key : 3 , src : 'imgs/reactjs.png', disponible : true},
    {id : 0 , key : 4 , src : 'imgs/html.png', disponible : true},
    {id : 1 , key : 5 , src : 'imgs/mongodb.png', disponible : true},
    {id : 2 , key : 6 , src : 'imgs/nodejs.png', disponible : true},
    {id : 3 , key : 7 , src : 'imgs/reactjs.png', disponible : true},
  ]

  const [firstChoosingImg , setFirstChoosingImg] = useState()
  const [secondeChoosingImg , setsecondeChoosingImg] = useState()

  const imgRef = useRef(imgs.map(() => React.createRef()))

  const choose = (imgKey) => {
    const selectedImg = imgs.find(img => img.key === imgKey);
    if(selectedImg.disponible){
      if(firstChoosingImg === undefined){
        setFirstChoosingImg(selectedImg.id)
        imgRef.current[imgKey].current.style.backgroundColor = 'lightblue';
      }else if (secondeChoosingImg === undefined){
        setsecondeChoosingImg(selectedImg.id)
      }
    }
  };
  

  useEffect((imgKey) => {
    if( firstChoosingImg !== undefined &&  secondeChoosingImg !== undefined ){
      if(firstChoosingImg === secondeChoosingImg ) {
        alert('done')
        imgRef.current[imgKey].current.style.backgroundColor = 'green';
        setFirstChoosingImg()
        setsecondeChoosingImg()
      }else if(firstChoosingImg != secondeChoosingImg || firstChoosingImg != firstChoosingImg) {
        alert('false')
        imgRef.current[imgKey].current.style.backgroundColor = 'null';
        setFirstChoosingImg()
        setsecondeChoosingImg()
      }
    }
  },[firstChoosingImg, secondeChoosingImg])

  return(
    <div>
      <div>
        {imgs.map(img => 
            <img ref={imgRef.current[img.key]} src={img.src} id={img.id} key={img.key} onClick={() => choose(img.key)} ></img>
          )}
      </div>
    </div>
  )
}
export default App;