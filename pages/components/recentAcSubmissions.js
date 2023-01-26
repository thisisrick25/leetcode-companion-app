// get recent submissions using useQuery hook from @apollo/client

import { useQuery } from '@apollo/client';
import client from '/lib/apollo';
import { RECENT_AC_SUBMISSIONS } from '/lib/queries';
import { useContext } from 'react';
import Context from './Context';

// function RecentAcSubmissions({ username }) {
function RecentAcSubmissions() {
    const username = useContext(Context);
    const limit = 10;
    // console.log(username);
    //use query RECENT_AC_SUBMISSIONS to get the data from leetcode.com/graphql endpoint
    const { data, loading, error } = useQuery(RECENT_AC_SUBMISSIONS, {
        variables: { username, limit },
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
            <h1>Recent AC Submissions</h1>
            <p>{data.recentAcSubmissionList[0].titleSlug}: {data.recentAcSubmissionList[0].title}</p>
        </div>
    );
}

export default RecentAcSubmissions;