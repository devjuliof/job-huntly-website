interface ButtonProps {
    text: string;
    textColor: string;
    backgroundColor: string;
}

export default function Button({text, textColor, backgroundColor}: ButtonProps) {
    return <button className={`${textColor} ${backgroundColor} font-semibold w-full px-4 py-3`}>{text}</button>
}