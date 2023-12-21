export default function Ranking(props) {
    const result = JSON.parse(localStorage.getItem("results"))
    return (
        <div style={{textAlign: 'center'}}>
            <div>Your last result was {result} rolls</div>
            <div>{props.rounds >= parseInt(result) ? 'Try to beat your score...' : 'Awesome, you made it in fewer rounds!'}</div>
        </div>
    )
}