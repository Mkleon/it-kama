import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activate = () => {
        this.setState({
            editMode: true
        })
    }

    deactivate = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatusThC(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
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
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivate} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;