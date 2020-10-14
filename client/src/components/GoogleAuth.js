import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '301856954386-vh072532lso8110a7689mgk88bd1iphv.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;