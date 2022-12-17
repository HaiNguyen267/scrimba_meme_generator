import './style.css'

export default function Header() {
    return (
        <div className='Header'>
            <div className="app-info">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="" />
                <p>Meme generator</p>
            </div>

            <div className="project-info">
                <p>React course - project 3</p>
            </div>

        </div>
    )
}