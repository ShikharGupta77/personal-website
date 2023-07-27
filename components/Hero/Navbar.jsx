import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
    const links = ['About', 'Experience', 'Projects', 'Contact', 'Resume']
    return (
        <div className="flex text-secondary-color h-24">
            <div className="flex flex-row space-x-11 items-center ml-20 transition duration-300">
                {links.map(link => {
                    return (
                        <a href={`#${link}`} className="group text-base text-secondary-color hover:text-accent-color transition duration-300">
                        {link}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent-color"></span>
                        </a>
                    )
                })}
            </div>
            <div className='flex flex-row ml-auto mr-28 space-x-11 items-center'>
                <span className='text-secondary-color hover:text-accent-color cursor-pointer transition duration-300'>
                    <FaLinkedin size={28}/>
                </span>
                <span className='text-secondary-color hover:text-accent-color cursor-pointer transition duration-300'>
                    <FaGithub size={28} />
                </span>
                <span className='text-secondary-color hover:text-accent-color cursor-pointer transition duration-300'>
                    <FaDiscord size={28} />
                </span>
                <span className='text-secondary-color hover:text-accent-color cursor-pointer transition duration-300'>
                    <FaInstagram size={28}/>
                </span>
            </div>
        </div>
    )
}