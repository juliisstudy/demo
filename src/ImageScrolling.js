import{useRef} from 'react';

export default function ImageScrolling(){
    const firstDish = useRef(null);
    const secondDish = useRef(null);
    const thirdDish = useRef(null);

    function handleScrollToFirst(){
        firstDish.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        }
        );
    }
    function handleScrollToSecond(){
        secondDish.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        }
        );
    }
    function handleScrollToThird(){
        thirdDish.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        }
        );
    }
    return(
        <>
        <nav>
            <button onClick={handleScrollToFirst}>1</button>
            <button onClick={handleScrollToSecond}>2</button>
            <button onClick={handleScrollToThird}>3</button>
        </nav>
        <div>
            <ul>
                <li><img src = {require("./images/Beef Stuffed Poblano.jpg")} alt="1" ref={firstDish}></img></li>
                <li><img src = {require("./images/Meatball Subs.jpg")} alt="2" ref={secondDish}></img></li>
                <li><img src = {require("./images/Sushi-Sashimi Combination.jpg")} ref={thirdDish}></img></li>
            </ul>
        </div>
        </>
    )

}