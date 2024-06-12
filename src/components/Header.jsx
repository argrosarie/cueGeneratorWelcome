import { YellowIcon, Close } from "./Icons"

const Header = ({onClose}) => {
    return (

        <section className="m-4 space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <YellowIcon />
                    <h1 className='text-[#e6e7ea] ml-2 md:text-xl'>Welcome to your Vault Cue Generator</h1>
                </div>
                <button onClick={onClose}>
                <Close />
                </button>
            </div>
            <div className="ml-8">
                <p className="text-[#919293] text-base">This tool is designed to help find you the most accurate sound for each line.</p>
                <p className="text-[#919293] text-base">Current tool is limited to 10 sounds max.</p>
            </div>
        </section>

    )
}

export default Header