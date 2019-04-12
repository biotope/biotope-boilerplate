import Component from '@biotope/element';
import template from './template';
import { ProfileCardProps, ProfileCardState, ProfileCardMethods }  from './defines';

class ProfileCard extends Component< ProfileCardProps, ProfileCardState > {
    static componentName = 'profile-card';

    constructor() {
        super();
    }

    static attributes = [
        { name: 'user', converter: (value) => JSON.parse(value)},
        { name: 'stats', converter: (value) => JSON.parse(value)},
        'cover-image'
    ];

    public methods: ProfileCardMethods = {
        toggleOpen: function (): void {
            this.setState({
                open: !this.state.open
            })
        }.bind(this)
    };

    get defaultState() {
        return {
            open: false
        }
    }

    get defaultProps() {
        return {
            user: {
                name: 'Max Mustermann',
                image: 'http://i.pravatar.cc/300',
                description: 'lorem ipsum dolor'
            },
            stats: {
                posts: 483,
                followers: 2343,
                following: 823
            },
            coverImage: 'https://source.unsplash.com/random'
        }
    }

    render() {
        return template(this.html, { ...this.props, ...this.state, ...this.methods });
    }
}

export default ProfileCard;
