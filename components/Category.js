import { forwardRef } from "react"


const Category = forwardRef((props) => (
    <div {...props} className="py-3">
            {props.children}
    </div>
))

Category.displayName = 'Category'

export default Category