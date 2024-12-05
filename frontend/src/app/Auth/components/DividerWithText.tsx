export default function DividerWithText({label}: {label: string}) {
    return (
        <div className="flex items-center gap-4">
            <hr className="flex-grow border-gray-300"/>
            <p className="text-base text-gray-500">{label}</p>
            <hr className="flex-grow border-gray-300"/>
        </div>
    )
}