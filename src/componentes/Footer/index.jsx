import "./footer.css"

const Footer = () => {
    return <footer className= 'footer' style={{backgroundImage:"url(/img/footer.png)"}}>
    <div className='redes'>
        <a href="https://www.instagram.com/">
            <img src="/img/facebook.png" alt='Facebook'/>
        </a>

        <a href="https://www.instagram.com/">
            <img src="/img/twitter.png" alt='Twitter'/>
        </a>

        <a href="https://www.instagram.com/">
            <img src="/img/instagram.png" alt='Instragram'/>
        </a>

    </div>
    <img src="/img/favicom 2.png" alt='org'/>
    <strong>Desarrollado por Cristian Duran</strong>

</footer>


}   


export default Footer