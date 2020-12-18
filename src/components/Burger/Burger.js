
import classes from './Burger.module.css';
import BurgerIgredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIgredient key={igKey + i} type={igKey} />;
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start to add ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIgredient type="bread-top" />
            {transformedIngredients}
            <BurgerIgredient type="bread-bottom" />
        </div>
    );
};

export default burger;