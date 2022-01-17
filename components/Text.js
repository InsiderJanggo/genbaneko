
export default function Text({ children }) {
    return(
        <div className="bg-indigo-500 text-center py-3 lg:px-4">
            <span className="text-lg">
                {children}
            </span>
        </div>
    )
}