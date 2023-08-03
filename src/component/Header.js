import React from 'react';
import head1 from '../Styles/header.module.css';

const Header = () => {
  return (
    <div>
        <div className={head1.tophead}>
            <div className={head1.tophead2}>

                   <li>Groups</li>
                   <li>RaceTracks</li>
                   <li>LeaderBoards</li>
                   <li>About</li>
                   <li>Contact</li>

            </div>
            <div></div>
            <div className={head1.tophead3}>
                <li></li>
                <li>SignIn</li>
                <li></li>

            </div>

        </div>


    </div>
  )
}

export default Header