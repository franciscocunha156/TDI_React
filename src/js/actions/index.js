import {ADD_ARTICLE} from "../constants/action-types";
import {DELETE_ARTICLE} from "../constants/action-types";
import {FETCH_ARTICLES, FETCH_ARTICLE} from "../constants/action-types"

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const deleteArticle = article => ({type: DELETE_ARTICLE, payload: article});
export const fetchArticles = () => ({type: FETCH_ARTICLES});

export const fetchArticle = id => ({type: FETCH_ARTICLE, payload: id});