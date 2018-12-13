import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteArticle} from "../actions/index";
import {fetchArticles} from "../actions/index";
import {Link} from 'react-router-dom';
import '../../css/custom.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    }
};

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends Component {

    constructor() {
        super();
        this.clickAction = this.clickAction.bind(this);
        fetch("http://206.189.117.223/api/articles").then(response => response.json()).then(articles => console.log('articles', articles));
    }

    clickAction(article) {
        this.props.deleteArticle(article);
    }

    componentDidMount() {
        if (this.props.articles.length==0){
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }

    }


    render() {

        const articles = this.props.articles;
        return (
            <div className={"scrolling-wrapper"}>

                    {articles.map((index) => (

                        <div className={"card"} key={index}  >
                            <div className={'divLink'}>
                            <Link className={"linkCust"}  to={"/articles/" + index.id}>{index.title}</Link>

                            </div>
                            <img className={'imgCust'} src={index.image}>
                            </img>
                            <p>Article by: {index.author.name}</p>
                            <div className={'DescripCust'}>
                            <p> {index.description}</p>
                        </div>
                            <div className={'buttonHolder'}>
                                <button  className={'DeleteBut'} onClick={() => this.clickAction(index)} >DELETE</button>
                            </div>

                        </div>


                    ))
                    }
            </div>

        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
