import React from "react";

import "../../styles/Main.css"

function About() {
    return (
        <>
            <section className="about__frame">

                    <div className="content__container is-align-center">

                        <img className="about__frame-svg is-desktop" src="src/assets/img/about.svg" alt="Team image"/>

                        <h1 className="about__frame-h1">О нас</h1>
                        <p className="about__frame-p">Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот
                            сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
                    </div>

            </section>
        </>
    )
}

export default About;
