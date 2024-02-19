import React from 'react';
import styled from 'styled-components';
import TweetInput from './TweetInput';


class Tweet extends React.Component {
    state = {
        isHovered: false,
        isClicked: false,
        likes: 0,
    };

    handleFormSubmit(newTweet) {
        this.setState(state => ({
            tweets: [newTweet, ...state.tweets],
            newTweet: ''
        }));
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    handleClick = () => {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked,
            likes: prevState.isClicked ? prevState.likes - 1 : prevState.likes + 1,
        }));
    };

    

    render() {
        const buttonStyle = this.state.isClicked || this.state.isHovered ? {
            backgroundColor: '#1DA1F2',
            color: '#FFFFFF',
        } : {
            backgroundColor: 'transparent',
            color: '#1DA1F2',
        };

        return (
            <div className='tweetBox' style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#F5F8FA',
                border: '1px solid #E1E8ED',
                borderRadius: '15px',
                padding: '20px',
                margin: '10px 0',
                width: '50%',
                minHeight: '50px', // Add this line
                alignItems: 'flex-start',
                color: '#14171A',
                fontFamily: 'Roboto, sans-serif',
            }}>

                <div className='author' style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    LeBron James
                </div>

                <div className="tweet" style={{ marginBottom: '20px', lineHeight: '1.5' }}>
                    {this.props.text}
                </div>

                <div className='likeInformation' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <button
                        className="like-button"
                        style={{
                            ...buttonStyle,
                            border: '1px solid #1DA1F2',
                            borderRadius: '15px',
                            padding: '5px 10px',
                            marginRight: '1rem',
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                        }}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={this.handleClick}
                    >
                        Like
                    </button>

                    <div className="total-likes" style={{
                        color: '#657786',
                        fontSize: '0.875rem',
                    }}>
                        {this.state.likes} likes
                    </div>
                </div>
            </div>
        );
    }
}

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #15202B;
    color: white;
    min-height: 100vh;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #1DA1F2;
`;


class TwitterHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [
                "This is very important for LeBron James and his legacy. If he loses the 3 point contest to Steph Curry, he will never be able to live it down.",
                "I'm not sure why everyone is so surprised that LeBron James is good at baseball. He's good at everything.",
                "LeBron James is the best player in the NBA. I don't care what anyone says.",
                "LeBron James is the best player in the world. I don't care what anyone says.",
                "LeBron James is the best player in the universe. I don't care what anyone says.",
                "LeBron James is the best player in the galaxy. I don't care what anyone says.",
                "LeBron James is the best player in the solar system. I don't care what anyone says.",
                "LeBron James is the best player in the Milky Way. I don't care what anyone says.",
            ],
            newTweet: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ newTweet: event.target.value });
    }

    handleFormSubmit(newTweet) {
        this.setState(state => ({
            tweets: [newTweet, ...state.tweets],
            newTweet: ''
        }));
    }

    render() {
        return (
            <div className="twitter-homepage">
                <h1>Twitter Homepage</h1>
                <TweetInput onNewTweet={this.handleFormSubmit} />

                {this.state.tweets.map((tweet, index) =>
                    <Tweet key={index} text={tweet} />
                )}
            </div>
        );
    }
}

export default TwitterHomepage;
