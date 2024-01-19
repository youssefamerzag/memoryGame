import React, { useEffect, useRef, useState } from "react";
import './App.css'
const App = () => {

  const [imgs ,setImg] = useState([
    {id : 0 , key : 0 , src : 'imgs/html.png' , disponible : true},
    {id : 1 , key : 1 , src : 'imgs/mongodb.png', disponible : true},
    {id : 2 , key : 2 , src : 'imgs/nodejs.png', disponible : true},
    {id : 3 , key : 3 , src : 'imgs/reactjs.png', disponible : true},
    {id : 0 , key : 4 , src : 'imgs/html.png', disponible : true},
    {id : 1 , key : 5 , src : 'imgs/mongodb.png', disponible : true},
    {id : 2 , key : 6 , src : 'imgs/nodejs.png', disponible : true},
    {id : 3 , key : 7 , src : 'imgs/reactjs.png', disponible : true},
    {id : 4 , key : 8 , src : 'imgs/redux.png' , disponible : true},
    {id : 5 , key : 9 , src : 'imgs/ruby.png', disponible : true},
    {id : 6 , key : 10, src : 'imgs/swift.png', disponible : true},
    {id : 7 , key : 11, src : 'imgs/typescript.png', disponible : true},
    {id : 4 , key : 12, src : 'imgs/redux.png', disponible : true},
    {id : 5 , key : 13, src : 'imgs/ruby.png', disponible : true},
    {id : 6 , key : 14, src : 'imgs/swift.png', disponible : true},
    {id : 7 , key : 15, src : 'imgs/typescript.png', disponible : true},
  ])

  useEffect(() => {
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
  }, []);


  const [firstChoosingImg , setFirstChoosingImg] = useState()
  const [secondeChoosingImg , setsecondeChoosingImg] = useState()
  const [firstImgKey , setFirstImgKey] = useState()
  const [secondeImgKey , setSecondeImgKey] = useState()

  const imgRef = useRef(imgs.map(() => React.createRef()))

  const choose = (imgKey) => {
    const selectedImg = imgs.find(img => img.key === imgKey);
    console.log(selectedImg.disponible);
    if(selectedImg.disponible){
      if(firstChoosingImg === undefined){
        setFirstChoosingImg(selectedImg.id)
        setFirstImgKey(imgKey)
        imgRef.current[imgKey].current.style.filter = 'brightness(100%)';
      }else if (secondeChoosingImg === undefined){
        setsecondeChoosingImg(selectedImg.id)
        setSecondeImgKey(imgKey)
        imgRef.current[imgKey].current.style.filter = 'brightness(100%)';
      }
    }
  };
  

  useEffect(() => {
    setTimeout(() => {
      if(firstChoosingImg !== undefined &&  secondeChoosingImg !== undefined && firstImgKey !== undefined && secondeImgKey !== undefined){
      if(firstChoosingImg === secondeChoosingImg) {
        setImg((prevImg) => {
          const updatedImgs = [...prevImg];
          updatedImgs[firstImgKey].disponible = false;
          updatedImgs[secondeImgKey].disponible = false;
          return updatedImgs;
        })
        imgRef.current[firstImgKey].current.style.background = 'green';
        imgRef.current[secondeImgKey].current.style.background = 'green';
      }else {
        imgRef.current[firstImgKey].current.style.filter = 'brightness(0%)';
        imgRef.current[secondeImgKey].current.style.filter = 'brightness(0%)';
      }
      setFirstChoosingImg();
      setsecondeChoosingImg();
    }
    }, 500);
      console.log(firstImgKey,secondeImgKey);
    
  },[firstChoosingImg, secondeChoosingImg, firstImgKey, secondeImgKey])

  return(
    <div className="App">
      <div className="imgs">
        {imgs.map(img => 
            <img className="img" ref={imgRef.current[img.key]} src={img.src} id={img.id} key={img.key} onClick={() => choose(img.key)} ></img>
          )}
      </div>
    </div>
  )
}
export default App;