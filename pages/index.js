import Head from 'next/head'
import { useState } from 'react';
import QuestionOfToday from './components/questionOfToday'
import UserPublicProfile from './components/userPublicProfile'
import Context from './components/Context';
import RecentAcSubmissions from './components/recentAcSubmissions';

//function for server side rendering
// export async function getServerSideProps() {

// }

export default function Home() {
    const [username, setUsername] = useState(''); //username is the state variable, setUsername is the function to update the state variable
    const [showProfile, setShowProfile] = useState(false);

    function handelSubmit(e) {
        e.preventDefault();
        setUsername(e.target.username.value);
        console.log(username);
        setShowProfile(true);
    }

    return (
        <>
            <Head>
                <title>Leetcode App</title>
                <meta name="description" content="Leetcode companian app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Leetcode App</h1>
                <QuestionOfToday />
                <form onSubmit={handelSubmit}>
                    <label>
                        Username: <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Context.Provider value={username}>
                    {showProfile && <UserPublicProfile />}
                    {showProfile && <RecentAcSubmissions />}
                </Context.Provider>
            </main>
        </>
    )
}
