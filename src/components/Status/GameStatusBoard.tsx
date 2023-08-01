import Hanger from './Hanger';
import './GameStatusBoard.css'

type status = "" | "won" | "lost";

type props = {
    status: status
    missed: number
};

const GameStatusBoard = ({ status, missed }: props) => {
    return (
        <>
            <div className={`status ${status}`}></div>
            <div className={"hanger"}>
                <Hanger missed={missed} />
            </div>
        </>
    )
}

export default GameStatusBoard;