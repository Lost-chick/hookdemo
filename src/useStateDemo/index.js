import React, {useEffect, useRef, useState} from 'react'

export default function useXState(initState) {
  const [state, setState] = useState(initState)

  let isUpdate = useRef()
  const setXState = (state, cb)=>{
    setState(prev=>{
      isUpdate.current = cb
      return typeof state === "function" ? state(prev):state
    })
  }

  useEffect(()=>{
    if(isUpdate.current) {
      isUpdate.current()
    }
  })
  return [state, setXState]
}
