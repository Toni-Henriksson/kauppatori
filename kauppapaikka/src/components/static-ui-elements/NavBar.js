import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { logout } from "../../firebase/functions";

import { Button, Dropdown } from "flowbite-react";


export function NavBar({ userEmail }) {
    const { toggleCart } = useContext(CartContext);

    return (
        <div className="w-full h-[60px] flex flex-row justify-center align-center items-center sticky top-0 z-50 shadow-md bg-white">
            <div className="flex flex-row justify-center ml-5">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    {" "}
                    Nettikirppari{" "}
                </span>
            </div>

            <div className="flex flex-row ml-auto mr-5">
                <div>
                    {
                        userEmail ?
                            <div className="flex flex-row">
                                <div className="w-[50px] mr-2">
                                    <Button onClick={toggleCart} size={"xs"} color="dark">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </Button>
                                </div>
                                <Dropdown label="Profiili" size={"sm"}>
                                    <Dropdown.Header>
                                        <span className="block truncate text-xs font-medium">
                                            {userEmail}
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item
                                        onClick={() => {
                                            window.location.href = "profile";
                                        }}
                                    >
                                        Profiili
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        Kirjaudu ulos
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                            :
                            <div className="flex">
                                <Button href="login"> Kirjaudu </Button>
                            </div>
                    }

                </div>
            </div>
        </div >
    )
}