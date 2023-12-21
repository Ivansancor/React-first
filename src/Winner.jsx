export default function Winner(props) {
    return (
    <div>
        <div style={{fontSize: '48px'}}>CONGRATS! YOU HAVE WON THE GAME!</div>
        <div style={{textAlign: 'center'}}>It took you <span style={{fontWeight: 'bold', fontSize: '24px'}}>{props.rounds}</span> rolls!!!</div>
    </div>
    )
}