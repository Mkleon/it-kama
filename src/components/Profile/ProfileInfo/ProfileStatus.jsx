import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activate = () => {
        this.setState({
            editMode: true
        })
    }

    deactivate = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activate}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivate} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;