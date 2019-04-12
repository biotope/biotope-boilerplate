/**
 * Properties
 */
interface ProfileCardProps {
    user: ProfileCardUserData;
    stats: ProfileCardStatsData;
    coverImage: string
}

interface ProfileCardUserData {
    name: string;
    image: string; 
    description: string; 
}

interface ProfileCardStatsData {
    posts: Number,
    followers: Number,
    following: Number
}

/**
 * States
 */
interface ProfileCardState {
    open: boolean
}

/**
 * Methods
 */
interface ProfileCardMethods {
    toggleOpen: Function
}

export {
    ProfileCardProps,
    ProfileCardState,
    ProfileCardMethods
}