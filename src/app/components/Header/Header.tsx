import React, { StatelessComponent } from 'react';
import './Header.scss';
import ProfileIcon from '../../../assets/images/profile.svg';
import AboutIcon from '../../../assets/images/about.svg';
import SignoutIcon from '../../../assets/images/signout.svg';
import ListIcon from '../../../assets/images/list.svg';
import { RouteComponentProps, RouterProps, RouteProps } from 'react-router';

interface HeaderProps {
    currentRoute: string;
    history: any;   // to-do: define proper types
}

const Header: StatelessComponent<HeaderProps> = ({currentRoute, history}) => {
    return (
        <div className="Header">
            <p className="Header_Logo">NICOLE</p>

            <div className="Header_Navigation">
                <img
                    src={ListIcon}
                    className={`IconImg ${(currentRoute === 'List' ? "IconImg--Active" : "")}`} 
                    onClick={() => history.push('/products')}
                />
                <img
                    src={ProfileIcon}
                    className={`IconImg ${(currentRoute === 'Profile' ? "IconImg--Active" : "")}`} 
                />
                <img
                    src={AboutIcon}
                    className={`IconImg ${(currentRoute === 'About' ? "IconImg--Active" : "")}`} 
                />
                <img
                    src={SignoutIcon}
                    className="IconImg"
                />
            </div>
        </div>
    );
}

export default Header;