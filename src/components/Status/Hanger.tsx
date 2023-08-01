const style = { backgroundColor: 'black', width: '400px' };

type props = {
    missed: number
};

const Hanger = ({ missed }: props) => {
    return <div style={style}>
        <img src={`/hanger/${missed}.png`} alt="hanger images" />
    </div>
}

export default Hanger