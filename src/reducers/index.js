
import authReducer from './auth.reducers';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import Teachers from './Teachers';
import Post from './Post';
import Groups from './Groups.reducers';
import OrderReducers from './Order.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    category: categoryReducer,
    auth: authReducer,
    product: productReducer,
    Teachers: Teachers,
    Post: Post,
    Groups: Groups,
    OrderReducers,


});

export default rootReducer;