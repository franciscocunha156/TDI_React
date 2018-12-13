import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions/index";
import '../../css/custom.css'
import ReactUploadImage from "./UploadImg";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "" ,
            description :"",
            author :""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {title} = this.state;
        const {description} = this.state;
        const {author} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ""});
        this.props.addArticle({description, id});
        this.setState({description: ""});
        this.props.addArticle({author, id});
        this.setState({author: ""});
    }

    render() {
        const str = window.location.href;
        const {title} = this.state;
        const {description} = this.state;
        const {author} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
<div className={'inputHolder'}>
                    <p>Title</p>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                        maxlength="20"
                    />
    <p>Description</p>
    <input
        type="text"
        className="form-control"
        id="description"
        value={description}
        onChange={this.handleChange}
        maxLength="20"
    />
    <p>Author</p>
    <input
        type="text"
        className="form-control"
        id="author.name"
        value={author.name}
        onChange={this.handleChange}
        maxLength="20"
    />

</div>


                </div>
                <div className={"buttonHolder"}>
                <button className={'SubmitBut'} type="submit" >
                    Add to collection
                </button>
                </div>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;