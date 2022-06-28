import React, {useState, useEffect} from 'react'


const url = "https://api.github.com/users/QuincyLarson";
console.log(url)
const MultipleRendering = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState("defualt user")
useEffect(()=>{
    fetch(url).then(resp =>{
        if(resp>=200 && resp <= 299){
            return resp.json()
        }else{
            setIsLoading(false)
            setIsError(true)
            throw new Error(resp.statusText)
        }
    }).then(user =>{
        const {login} = user
        setUser(login)
        setIsLoading(false)
    }).catch(err=>{
        console.log(err)
    })
    if(isLoading){
        return <h1>Loadingh...</h1>
    }

    if(isError){
        return <h1>Error...</h1>
    }
})
    

  return (
    <d>MultipleRendering</d>
  )
}

export default MultipleRendering