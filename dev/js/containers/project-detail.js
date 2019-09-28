import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProjectDetail extends Component {

    render() {
        if(!this.state.project) {
            return (<div>Select a Project to view...</div>);
        }
        return (
            <div>
                <img src={this.props.project.thumbnail} />
                <h2>{this.props.project.title}, {this.props.project.type}</h2>
                <h2>Start: {this.props.project.startDate}, End: {this.props.project.endDate}</h2>
            </div>
        );
    }

}