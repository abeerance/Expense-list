/* eslint-disable */

/* 
Example of duplicated CSS which is made reusable, 
by making a class inheritable thanks to 
element forwading with props 
-> Card is here seen as a wrapper!
*/

import './Cards.css'

const Card = (props) => {
    {/* Anything we receive from outside is added to the class string of the CARD-Element*/}
    const classes = 'card ' + props.className;
    {/* .children is used that the inner elements are also included - inheritance -> enables Wrapper components */}
    return <div className={classes}>{props.children}</div>
}

export default Card