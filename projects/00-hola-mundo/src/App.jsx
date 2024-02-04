import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
        </section >
    )
}