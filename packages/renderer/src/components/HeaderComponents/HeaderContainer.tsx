import React from "react";



function HeaderContainer(){
    return (
        <div className="border-2 border-b-gray-400 h-10 flex flex-row justify-between">
            <h3>Calendar System</h3>
            <div className="flex flex-row">
                <span>Username</span>
                <img src="" className="bg-blue-400 h-8 w-8 rounded-full"/>
            </div>
        </div>
    );
}

export { HeaderContainer }
