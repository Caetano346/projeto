import perfil from "../../assets/perfil.png"
import ProgressBar from 'react-bootstrap/ProgressBar'

function Home() {
    return (
        <>
            <section className="container mt-5 d-flex gap-5 w-100">
                <div className="d-flex justify-content-center mt-5">
                    <img src={perfil} alt="" />
                </div>

                <div className="conteudo mt-5">
                    <h2>Olá, Meu nome é João Victor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae quia earum, deleniti obcaecati velit cupiditate delectus! Cumque similique vero unde molestias minus temporibus ipsa neque incidunt. Voluptate, quis saepe.</p>

                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Formação Acadêmica</button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Formação Acadêmica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul>
                                <li>TADS - IFMS</li>
                                <ul>2021 - CURSANDO</ul>
                                <li>Técnico em Informática</li>
                                <ul>2016 - 2018</ul>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h5>Front-End</h5>
                        <ProgressBar animated now={100} />
                    </div>
                    <div className="mt-3">
                        <h5>Back-End</h5>
                        <ProgressBar animated now={100} />
                    </div>
                    <div className="mt-3">
                        <h5>Mobile</h5>
                        <ProgressBar animated now={100} />
                    </div>

                    <div className="d-flex gap-4 mt-5 justify-content-center h1">
                        <i class='bx bxl-html5' ></i>
                        <i class='bx bxl-css3' ></i>
                        <i class='bx bxl-javascript' ></i>
                        <i class='bx bxl-python' ></i>
                        <i class='bx bxl-java' ></i>
                        <i class='bx bxl-react'></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home