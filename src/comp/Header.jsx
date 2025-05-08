import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <div >
            <span className="font" style={{ display: "flex" }}>

                <div style={{ width: "50%" }}>
                    A<div class="image-container"><a href="https://x.com/olvhrs" target="_blank"><img className="img" src="https://framerusercontent.com/images/0pm0YMy5C3Wnyy3wwxyelg47gO4.png" alt="icon1" style={{ width: 50, display: "inline-flex" }} /></a>   <div class="overlay"></div></div>designer working with startups globally. Currently steering the ship at


                    <svg style={{ display: "inline", height: "1em", verticalAlign: "middle" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 124 124" fill="none">
                        <rect width="124" height="124" rx="24" fill="#000" />
                        <path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="white" />
                        <circle cx="63.2109" cy="37.5391" r="18.1641" fill="black" />
                        <rect opacity="0.4" x="81.1328" y="80.7198" width="17.5687" height="17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74" />
                    </svg><span style={{ color: "black" }}><a className="link-style" href=" https://daniahzaheda.github.io/sol2/" target="_blank" rel="noopener noreferrer"> Haptic.</a></span>

                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        shake
                        style={{
                            color: "black",
                            fontSize: "30px",
                            position: "absolute",
                            top: 10,
                            right: 20,
                        }}
                    />
                </div>
            </span>

        </div>
    )

}