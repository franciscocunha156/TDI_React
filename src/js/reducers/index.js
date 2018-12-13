import {ADD_ARTICLE, ARTICLE_FETCH_SUCCEEDED} from "../constants/action-types";
import {DELETE_ARTICLE} from "../constants/action-types";
import {ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";


const initialState = {
    articles: [],
    article: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log('add', action.payload);
            return { ...state, articles: [...state.articles, action.payload] };
        case DELETE_ARTICLE:
            console.log('add', action.payload);
            return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
        case ARTICLES_FETCH_SUCCEEDED:
            console.log('success: ', action.payload.data);
            return { ...state, articles: [...state.articles, ...action.payload.data] };
        case ARTICLE_FETCH_SUCCEEDED:
            console.log('setting article',  action.payload);
            return {...state, article: action.payload};
        default:
            return state;
    }
};

export default rootReducer;