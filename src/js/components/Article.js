import React, {Component} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchArticle} from "../actions";
import SocialShare from "./SocialShare";

class Article extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){

        this.props.fetchArticle(this.props.match.params.id)
    }
    render(){

        if(this.props.article.article){
            console.log('this.props.article', this.props.article.article);
            return  <div>
                <Link className={"backLink"}
                         to="/articles"

                >
                    Back to articles
                </Link>





                <div className={"card cardDetail"}>
                <h1> {this.props.article.article.data.title}

                </h1>
                <img className={'imgCust'} src={this.props.article.article.data.image}>
                </img>

                    <p> {this.props.article.article.data.description}</p>

                    <img className={'authorCust'} src={this.props.article.article.data.author.photo}></img>
                    <p>Article by: {this.props.article.article.data.author.name}</p>




        <div></div>

            <SocialShare/>



            </div>

            </div>
        }
        return <div>Loading </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {fetchArticle: id => dispatch(fetchArticle(id))};
};
const mapStateToProps = article => {
  return {

      article
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));