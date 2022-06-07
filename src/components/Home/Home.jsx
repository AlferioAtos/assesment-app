
export const Home = () =>
{
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome</h1>
                <p>
                    This is a React app used to assesment the React skills.
                </p>
            </div>
            <div className="row">

                <h4>Routes:</h4>
                <div className="container">
                    <ul>
                        <li>
                            First : This route will take you to the firts point of the ATOS DTC code Test.
                        </li>
                        <li>
                            SecondA : This route will take you to the second point section A of the ATOS DTC code Test.
                        </li>
                        <li>
                            SecondB : This route will take you to the second point section B of the ATOS DTC code Test.
                        </li>
                        <li>
                            SecondC : This route will take you to the second point section C of the ATOS DTC code Test.
                        </li>
                        <li>
                            Senior Assesment : This route will take you to the sulution of the React Challenge.
                        </li>
                    </ul>
                </div>
                <h4>Components:</h4>
                <p>Each Route has its own component in the components folder</p>
                <h4>Custom Hooks:</h4>
                <p>Each project &#40; ATOS DTC code test and React Challenge &#41; has it own cutoms hooks file in the hooks folder. </p>
                <h4>Models:</h4>
                <p>Each project &#40; ATOS DTC code test and React Challenge &#41; has it own models file in the models folder. </p>
                <h4>Routes:</h4>
                <p>Routes for the project where defeined in the folder routers.</p>
                <h4>Styles:</h4>
                <p>The project was styled using bootstrap 5.2 &#40; Only CSS &#41; via CDN. </p>
            </div>
        </div>
    )
}
