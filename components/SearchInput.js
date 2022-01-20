
export default function SearchInput({ children, onSubmit }) {

    return(
        <>

        <form onSubmit={onSubmit}>
            {children}
        </form>

        </>
    )
}