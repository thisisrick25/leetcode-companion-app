import { gql } from '@apollo/client';

export const USER_PUBLIC_PROFILE = gql`
query userPublicProfile($username: String!) {
	matchedUser(username: $username) {
		contestBadge {
			name
			expired
			hoverText
			icon
		}
		username
		githubUrl
		twitterUrl
		linkedinUrl
		profile {
			ranking
			userAvatar
			realName
			aboutMe
			school
			websites
			countryName
			company
			jobTitle
			skillTags
			postViewCount
			postViewCountDiff
			reputation
			reputationDiff
			solutionCount
			solutionCountDiff
			categoryDiscussCount
			categoryDiscussCountDiff
		}
	}
}`;

export const QUESTION_OF_TODAY = gql`
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`;

export const RECENT_AC_SUBMISSIONS = gql`
query recentAcSubmissions($username: String!, $limit: Int!) {
	recentAcSubmissionList(username: $username, limit: $limit) {
		id
		title
		titleSlug
		timestamp
	}
}`;

export const SKILL_STATS = gql`
query skillStats($username: String!) {
	matchedUser(username: $username) {
		tagProblemCounts {
			advanced {
				tagName
	    		tagSlug
	    		problemsSolved
  			}
			intermediate {
	    		tagName
	    		tagSlug
	    		problemsSolved
  			}
			fundamental {
	    		tagName
	    		tagSlug
	    		problemsSolved
  			}
		}
	}
}`;