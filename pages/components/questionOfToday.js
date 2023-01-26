//question.js to get the data from leetcode.com/graphql endpoint using useQuery hook from @apollo/client

import { useQuery } from '@apollo/client';
// import client from '/lib/apollo';
import { QUESTION_OF_TODAY } from '/lib/queries';

//function for server side rendering
// export async function getServerSideProps() {
//     //use query QUESTION_OF_TODAY to get the data from leetcode.com/graphql endpoint
//     const { data, loading, error } = await client.query({
//         query: QUESTION_OF_TODAY,
//     });

//     // if (loading) {
//     //     return <p>Loading...</p>;
//     // }
//     // if (error) {
//     //     return <p>Error: {error.message}</p>;
//     // }

//     return {
//         props: {
//             data,
//             loading,
//             error,
//         },
//     }
// }


function QuestionOfToday() {
    // use query QUESTION_OF_TODAY to get the data from leetcode.com/graphql endpoint
    const { data, loading, error } = useQuery(QUESTION_OF_TODAY, {
        // client,
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
            <h1>Today Question</h1>
            <p>{data.activeDailyCodingChallengeQuestion.question.frontendQuestionId}: {data.activeDailyCodingChallengeQuestion.question.title}</p>
        </div>
    );
}

export default QuestionOfToday;