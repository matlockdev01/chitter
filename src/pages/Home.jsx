import ButtonAppBar from "../components/app-bar";
import DeckGrid from "../components/grid";

export default function Home() {
    return(
        <>
            <ButtonAppBar />
            <h1>Good afternoon, user.name!</h1>
            <DeckGrid />
        </>
    )
}