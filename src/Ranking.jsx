export default function Ranking(props) {
    const result = JSON.parse(localStorage.getItem("results")) || [];
    let highest = parseInt(Math.min(...result)) || props.rounds;
    {if (props.rounds <= highest) {
        highest = props.rounds
    }}

    return (
        <div style={{textAlign: 'center', fontSize: '14px', marginTop: '5px'}}>
            {result.length > 0 && 
            <div>
                <div>Your last results: {result.join(", ")}</div>
                <div>Highest score amongst 5 latest: <span style={{fontWeight: "bold"}}>{highest}</span></div>
            </div>}
            {highest === props.rounds && <div style={{color: 'slateblue'}}>You got a new highest score!</div>}
            
            {/* <div>Your last result was {result} rolls</div> */}
            {/* <div>{props.rounds >= parseInt(result) ? 'Try to beat your score...' : 'Awesome, you made it in fewer rounds!'}</div> */}
        </div>
    )
}