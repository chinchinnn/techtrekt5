import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavigationBar } from '../Layout/NavigationBar';
import { Layout } from '../Layout/Layout';

export class Home extends Component {
    render(){
        return(
            <div>
                <NavigationBar/>
                <Layout>
                    <br/>
                    <h2>Welcome Back</h2>

                </Layout>
            </div>
        )
    }
}

export default Home