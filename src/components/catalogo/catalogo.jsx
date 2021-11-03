import {Component} from 'react';

class Catalogo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Gonzalo',
        }        
    }

    render(){
        return
            <div>
                <h1>El Catalogo de cosas</h1>
            </div>;
        
    }
}

