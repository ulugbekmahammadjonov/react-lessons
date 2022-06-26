import React, {useState, useEffect} from 'react'

const UseEffectFetchData = () => {
    const [users, setUSers] = useState([])
    const getUSers = async ()=>{
        const response = await fetch("https://api.github.com/users")
        const users  = await response.json()
        setUSers(users)
    }
    useEffect(()=>{
        getUSers()
    }, [])
    console.log(users)
  return (
    <div>
        <h1>GitHUb users</h1>
        <ul className='users'>
            {
                users.map(user =>{
                    const {id, login, avatar_url, html_url} = user
                    return(
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UseEffectFetchData