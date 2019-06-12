import React from 'react';
import {TextField} from '@material-ui/core';

class SearchBar extends React.Component {

    state = {
        form: {
            name: '',
            description: '',

        }
    };


    handleChange = name => event => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: event.target.value
            }
        })
    };

    render() {

        const {form: {name, description}} = this.state;

        return (
            <div className="ui segment">
                <form>
                    <TextField
                        required
                        id="standard-required"
                        label="Name"
                        value={name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        required
                        id="standard-required"
                        label="Description"
                        value={description}
                        onChange={this.handleChange('description')}
                        margin="normal"
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
