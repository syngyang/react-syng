import './menu.scss'


export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")} >
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#testmonials">Testmonials</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
