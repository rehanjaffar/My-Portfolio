

import { RiMenu2Line, RiMenu3Line } from "@remixicon/react";

export function NavBar({onHandle,onHide}) {






    return (
        <>
             <div className="nav flex justify-between items-center pl-7 pr-11 bg-orange-400">
                <a onClick={onHandle}><RiMenu2Line/></a>
                <img src="/src/assets/logo.png" className="w-32 mix-blend-darken z-10" alt="" />
                <a onClick={onHide}><RiMenu3Line/></a>
        </div>
        </>
    )
}