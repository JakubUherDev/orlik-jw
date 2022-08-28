import {useState} from 'react'
// import './App.css'
import Header from './components/Header/Header';
import PlayerList, {Player, PlayerType} from "./components/PlayerList/PlayerList";
import NewPlayer from "./components/NewPlayer/NewPlayer";
import swal from 'sweetalert';
import heroUrl from '../../assets/hero1.png';

const player: Player = new Player("Marcin Kotowski", "+48668228668", PlayerType.kapitan)


function App() {
    const [count, setCount] = useState(0)
    const [players, setPlayers] = useState([player])

    const addNewPlayer = (name: string, phoneNumber: string) => {
        if (players.length < 12) {
            if (players.filter(p => p.name === name).length !== 1) {
                const currentPlayers = [...players]
                const newPlayer = new Player(name, phoneNumber, currentPlayers.length < 10 ? PlayerType.zawodnik: PlayerType.zawodnik_rezerwowy)
                currentPlayers.push(newPlayer)
                setPlayers(currentPlayers)
            }
           else {
                swal({
                    title: "Zawodnik jest juz na liscie",
                    text: "Zawodnik o takim samym Imieniu i Nazwisku istnieje juz na liscie.",
                    icon: "error"
                })
            }
        }

        if (players.length >= 12) {
            swal({
                title: "Pelny Sklad",
                text: "Przepraszamy, w tym tygodniu mamy juz pelny sklad. Sproboj za tydzien!",
                icon: "warning"
            })
        }
    }

    const removePlayer = (player: any): void => {
        setPlayers([...players.filter(p => p.name != player.name)])
    }


    setInterval(function(){
        setPlayers([player])
    }, 1000 * 60 * 60 * 24 * 7);

    return (
        <div className="App">
            <div className="container mx-auto w-full md:w-1/2">
                <Header/>
                <img className={'w-full h-full'} src={heroUrl} alt='Hero Image'/>
                <PlayerList players={players} removePlayers={removePlayer}/>

                <div className="mt-4">
                    <NewPlayer addNewPlayer={addNewPlayer}/>
                </div>

            </div>

            <footer className="bg-gray-100 text-center lg:text-left mt-16">
                <div className="container p-6 text-gray-800 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 ">
                        <div className="mb-6 md:mb-0">
                            <h5 className="font-medium mb-2 uppercase">Zasady</h5>

                            <p className="mb-4">
                                - 6 vs 6 <br/>
                                - Rezerwowi nie graja
                            </p>
                        </div>

                        <div className="mb-6 md:mb-0">
                            <h5 className="font-medium mb-2 uppercase">Polityka prywatności</h5>

                            <p className="mb-4">
                                Informujemy, że strona orlik-jw.pl nie wykorzystuje plikow cookie. <br/>
                                Zapisujac sie na naszej lisicie wyrażasz zgodę na używanie twojego numeru w celach kontaktowych, <br/>
                                ale tylko w wypadku nieobecnosci na boisku.
                            </p>
                        </div>
                    </div>
                </div>

                {/*<div className="text-center text-gray-700 p-4">*/}
                {/*    © 2022 Copyright:*/}
                {/*    <a className="text-gray-800" href="https://kdev-solutions.co.uk/">KDev Solutions</a>*/}
                {/*</div>*/}
            </footer>
        </div>
  )
}

export default App
