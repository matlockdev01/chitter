import { NavLink, Outlet } from "react-router-dom"
import ButtonAppBar from "../components/app-bar"

export default function RootLayout() {
    return(
        <div className="root-layout">
            <ButtonAppBar></ButtonAppBar>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="library">Library</NavLink>
                    <NavLink to="deck">Deck</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}