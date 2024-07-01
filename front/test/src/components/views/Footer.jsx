import logo from '../../assets/img/logo-hefe-blanco.svg'

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-center text-white fixed bottom-0 w-full items-center justify-between">
        <div className="p-6 text-center flex justify-center items-center">
            <a className="mx-3" href="">
                <img className="h-7 w-auto mr-8" src={logo} alt="logo hefe" />
            </a>
            <p>Copyright &copy; hefe.</p>
        </div>
    </footer>
    )
}

export default Footer