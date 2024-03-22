import { useState } from "react"

export function TwitterFollowCard ({ userName, name, initialIsFollowing }){
    const imgSrc = `https://unavatar.io/${userName}`
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing 
        ? 'Following' 
        : 'Follow'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className="tw-followCard">
            <header className='tw-followCard-allInfo'>
                <img 
                    src= {imgSrc} 
                    alt="avatar"
                    className='tw-followCard-avatar'
                />
                
                <div className='tw-followCard-info'> 
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside> 
                <button className = {buttonClassName} onClick={handleClick}>
                    <span className="tw-follow-button-text">{text}</span>
                    <span className="tw-follow-stop-following">Stop Following</span>
                </button>
            </aside>
        </article>
    )
}