import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProject} from "../actions";

class ProjectList extends Component {
    renderList() {
        return this.props.projects.map((project) => {
            return (
                <li key={project.id} onClick={() => this.props.selectProject(project)}>
                    {project.type} {project.title}
                </li>);
        });

    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectProject: selectProject}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectList);