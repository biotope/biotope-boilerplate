import * as styles from './styles.scss';
import { ProfileCardProps, ProfileCardState, ProfileCardMethods } from './defines';


const template = (render: Function, data: ProfileCardProps & ProfileCardState & ProfileCardMethods) => {
    let CoverImageBackground = `background-image: url(${data.coverImage})`;
    
    return render`
        <style>
        ${styles.toString()}
        </style>
        <div class=${data.open ? 'profile-card--open': null}>
            <div class="profile-card__cover" style=${CoverImageBackground}>
               
            </div>
            <div class="profile-card__image">
                <figure>
                    <img src="${data.user.image}">
                </figure>
            </div>
   
            <div class="profile-card__description" onclick=${data.toggleOpen}>
                <h3>${data.user.name}</h3>
                <p>${data.user.description}</p>
            </div>

            <div class="profile-card__bottomLine">
                <ul>
                    <li>
                        <strong>${data.stats.posts}</strong>
                        <small>Posts</small>
                    </li>
                    <li>
                        <strong>${data.stats.followers}</strong>
                        <small>Followers</small>
                    </li>
                    <li>
                        <strong>${data.stats.following}</strong>
                        <small>Following</small>
                    </li>
                </ul>
            </div>
        </div>
    `;
    
}



export default template;
