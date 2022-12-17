import './style.css'
import { useState, useEffect } from 'react'

export default function Form() {
    const [allMemes, setAllMemes] = useState([])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        url: ''
    })
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
            console.log(data);
            setAllMemes(data.data.memes)
        }

        fetchData()
    }, [])

    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleClick(event) {
        event.preventDefault()
        console.log("clicked");
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        setMeme(allMemes[randomIndex])
    }

    return (
        <div className="Form">
            <form className='text-form'>
                <input 
                    type="text" 
                    placeholder='Top text'
                    name='topText'
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder='Bottom text'
                    name='bottomText'
                    value={formData.bottomText}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Get a new meme image<i class="fa-regular fa-image"></i></button>
            </form>

            <div className="meme">
                <img className='meme-img' src={meme.url} alt="" />
                <h2 className='meme-text top-text'>{formData.topText}</h2>
                <h2 className='meme-text bottom-text'>{formData.bottomText}</h2>
            </div>
        </div>
    )
}