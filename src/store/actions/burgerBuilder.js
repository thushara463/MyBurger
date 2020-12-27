import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        igName: name
    }
}

export const removeIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        igName: name
    }
}

export const setIngredients = ings => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ings
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-builder-c66ec-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            });
    }
}

