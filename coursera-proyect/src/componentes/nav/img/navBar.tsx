import React from 'react'
import "../css/styles.css"
export default function NavBar() {
  return (
    <>
    
      
        
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" className= "coursera-logo" alt="Coursera Logo" height="40"/>
            <button className="btn explorar ">Explorar <i className="fa-solid fa-angle-down"></i></button>
            <form className="d-flex" role="search">
                <div className="container-search">
                    <input className="form-control " type="text" placeholder="¿Qué deseas aprender?" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
    
                </div>
            </form>
    
            <div className="navbar-links">
                <a href="#">Títulos de grado en línea</a>
                <a href="#">Buscar carreras</a>
                <a href="#">Inicia Sesión</a>
            </div>
            <div className="navbar-join">
                <a href="#">Únete de forma <br/>gratuita</a>
            </div>
        </div>
        </nav>
        {/* <!--<header className="bg-dark text-white">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" className= "coursera-logo" alt="Coursera Logo" height="40">
                        <nav className="ml-4">
                        </nav>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-light">Explorar <span>&#9660;</span></button>
                        <div className="input-group ml-3">
                            <input type="text" className="form-control" placeholder="¿Qué deseas aprender?">
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button"><span>&#128269;</span></button>
                            </div>
                        </div>
                        <nav className="ml-4">
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link text-white" href="#">Títulos de grado en línea</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Buscar carreras</a></li>
                                <li className="nav-item"><a className="nav-link text-white" href="#">Inicia Sesión</a></li>
                                <li className="nav-item"><a className="nav-link btn btn-outline-light" href="#">Únete de forma gratuita</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section className="hero bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-4">Acceso ilimitado a más de 7000 cursos de nivel mundial</h1>
                    <p className="lead">Proyectos prácticos y programas con certificados que te prepararán para el trabajo, todo incluido en tu suscripción.</p>
                    <p>59 US$/mes, se puede cancelar en cualquier momento</p>
                    <a href="#" className="btn btn-primary btn-lg">Comenzar la prueba gratuita de 7 días</a>
                    <p className="mt-3">o 399 US$/año con garantía de devolución de dinero de 14 días</p>
                </div>
            </section>
            <section className="partners py-5">
                <div className="container text-center">
                    <h3>Aprende de más de 325+ universidades y empresas líderes con Coursera Plus</h3>
                    <div className="d-flex justify-content-center flex-wrap mt-4">
                        <img src="./img/illinois-logo.png" alt="Illinois" className="m-3" height="40">
                        <img src="duke-logo.png" alt="Duke" className="m-3" height="40">
                        <img src="./img/google.png" alt="Google" className="m-3" height="40">
                        <img src="./img/michigan-logo.png" alt="University of Michigan" className="m-3" height="40">
                        <img src="./img/ibm-logo.png" alt="IBM" className="m-3" height="40">
                        <img src="./img/vanderbilt-logo.png" alt="Vanderbilt University" className="m-3" height="40">
                        <img src="johns-hopkins-logo.png" alt="Johns Hopkins University" className="m-3" height="40">
                    </div>
                </div>
            </section>
        </main>--> */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://kit.fontawesome.com/4c0694d6b6.js" ></script>
  
    </>
  );
}
