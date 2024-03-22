import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        userName: 'mora',
        name: 'felipe',
        initialIsFollowing: true
    },
    {
        userName: 'castle',
        name: 'castillo',
        initialIsFollowing: false
    },
    {
        userName: 'Pedro',
        name: 'Pedro',
        initialIsFollowing: false
    },
]

export function App() {
    
    return (
        <section className = "App">
           {
            users.map(user =>{
                const {userName, name, initialIsFollowing} = user

                return(
                    <TwitterFollowCard
                        key={userName}
                        userName = {userName}
                        name = {name}
                        initialIsFollowing = {initialIsFollowing}
                    >


                    </TwitterFollowCard>
                )
            })
           }

        </section>
    )
}