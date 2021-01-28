import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== props.show || nextProps.children !== this.props.children;
  // }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Aux>
  )
}

// React.memo is used here because it was comparing props
// now instead we use React.memo and use the 2nd params to see if props.show and .children are equal
// instead of a difference
export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);