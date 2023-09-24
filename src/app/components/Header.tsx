import Image from "next/image";
import InstaIcon from "../assets/imagens/square-instagram.svg";
import FaceIcon from "../assets/imagens/square-facebook.svg";
import ZapIcon from "../assets/imagens/square-whatsapp.svg";

export default function Header() {

    return (

        <div className="w-full h-[150px] border bg-slate-400 grid grid-cols-3 gap-4 items-center">

            <div className="border h-[100px] w-[200px] flex justify-center items-center ml-32">
                <ul className="flex space-x-4">
                    <li><Image src={InstaIcon} alt="Insta icon" className="w-9" /></li>
                    <li><Image src={FaceIcon} alt="Face icon" className="w-9" /></li>
                    <li><Image src={ZapIcon} alt="whatsapp icon" className="w-9" /></li>
                </ul>
            </div>

            <div>
                <h1 className="text-center font-bold text-5xl border">Test</h1>
            </div>

            <div className="border h-[100px] w-[200px] flex justify-center items-center ml-32">
                oii
            </div>

        </div>
    );
}
