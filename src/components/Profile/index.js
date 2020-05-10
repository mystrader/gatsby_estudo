import React from 'React'
import {StaticQuery, graphl} from 'gatsby'

const Profile = () => (    
    <StaticQuery>
        query={graphql ``}
    </StaticQuery>
    <div className="Profile-wrapper">
        <h1>Matt Foo</h1>
        <h2>Programador frontend</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
)

export default Profile