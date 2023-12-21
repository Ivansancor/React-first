export default function Winner(props) {
    return (
    <div style={{textAlign: 'center'}}>
        <div className='congrats-text'>CONGRATS! YOU HAVE WON THE GAME!</div>
        <div>It took you <span style={{fontWeight: 'bold', fontSize: '24px'}}>{props.rounds}</span> rolls!!!</div>
    </div>
    )
}