import './index.css'

function Random(props) {
    const random = Math.floor(Math.random() * ((props.max - props.min) + props.min))
    return (
        <div className = 'random-template'>
            Random value between {props.min} and {props.max} {'=>'} {random}
        </div>
    )

}

export default Random;