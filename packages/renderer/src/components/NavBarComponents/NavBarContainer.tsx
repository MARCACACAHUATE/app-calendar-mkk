import React from "react";
import { NavBarButton } from './NavBarButton';
import { NavMenuContainer } from './NavMenuContainer';

function NavBarContainer(){

    return (
        <div className="bg-emerald-400 h-full w-16">
            <NavBarButton />
            <NavMenuContainer />
        </div>
);

}

export { NavBarContainer }
