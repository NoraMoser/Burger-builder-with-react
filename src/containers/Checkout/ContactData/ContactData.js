import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render(){
        return (
            //this is where you would put the inputs, etc
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    ...
                    <Button btnType='Success'>Order Now</Button>
                </form>
                
            </div>
        );
    }
}

export default ContactData;