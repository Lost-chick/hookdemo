import React, {useEffect, useState} from 'react'

const useScroll = (scrollRef) => {
  const [pos, setPos] = useState([0,0])

  useEffect(()=>{
    function handleScroll(e) {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop])
    }

    scrollRef.current.addEventListener('scroll', handleScroll, false)
  }, [])



  return pos
}

// export default useScroll

const Home=(props)=>{
  const scrollRef = useRef(null);
  const [x, y]= useScroll(scrollRef)

  return (
    <div ref={scrollRef}>
      
    </div>
  )
}
