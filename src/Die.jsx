import DiceOne from '../public/dice-1.svg';
import DiceTwo from '../public/dice-2.svg';
import DiceThree from '../public/dice-3.svg';
import DiceFour from '../public/dice-4.svg';
import DiceFive from '../public/dice-5.svg';
import DiceSix from '../public/dice-6.svg';

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? 'slateblue' : '#f5f5f5',
        color: props.isHeld ? 'white' : 'black'
    }

    return (
        <div className='die' style={styles} onClick={props.toggle}>
            <img className= {props.num === 5 ? "die-img-five" : "die-img"} src={
                props.num === 1 ? DiceOne :
                props.num === 2 ? DiceTwo :
                props.num === 3 ? DiceThree :
                props.num === 4 ? DiceFour :
                props.num === 5 ? DiceFive :
                DiceSix}
            />
        </div>
    )
}