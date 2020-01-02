import React from 'react';

import classes from './DrawerToggle.module.css'

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
    {props.children}</div>
);

export default drawerToggle;