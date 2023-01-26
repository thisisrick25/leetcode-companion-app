// display public profile using useQuery hook from @apollo/client

import { useQuery } from '@apollo/client';
import client from '/lib/apollo';
import { USER_PUBLIC_PROFILE } from '/lib/queries';
import { useContext } from 'react';
import usernameContext from './Context';

// function UserPublicProfile({ username }) {
function UserPublicProfile() {
    const username = useContext(usernameContext);
    // console.log(username);
    //use query PUBLIC_PROFILE to get the data from leetcode.com/graphql endpoint
    const { data, loading, error } = useQuery(USER_PUBLIC_PROFILE, {
        variables: { username },
        client,
    });

    // console.log(data);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Public Profile</h1>
            <p>{data.matchedUser.username}</p>
        </div>
    );
}

export default UserPublicProfile;