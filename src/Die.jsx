export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? 'slateblue' : '#f5f5f5',
        color: props.isHeld ? 'white' : 'black'
    }

    return (
        <div className='die' style={styles} onClick={props.toggle}>{props.num}</div>
    )
}