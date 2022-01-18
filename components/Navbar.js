import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter()
    const { t } = useTranslation()

    return(
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            onClick={() => router.push('/')}
                            href="#"
                        >
                            現場猫ブログ
                        </a>
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div
                        className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }
                        id="navbar-1"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#"
                                    onClick={() => router.push('/')}
                                >
                                    {t('navbar:home_link')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#"
                                    onClick={() => router.push('/about')}
                                >
                                    サイト概要
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>  
        </>
    )
}