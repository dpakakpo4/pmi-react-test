import { IProduct } from "../../core/store/store-types";
import BookForm from "./BookForm";
import DVDForm from "./DVDForm";
import FurnitureForm from "./FurnitureForm";

const getSpecificProductForm = (values: IProduct, handleChange: (event: any) => void): any => ({
    dvd: <DVDForm values={values} handleChange={handleChange} />,
    book: <BookForm values={values} handleChange={handleChange} />,
    furniture: <FurnitureForm values={values} handleChange={handleChange} />
})

interface SpecificFormProps {
    values: IProduct;
    handleChange: (event: any) => void;
    type: string;
}
export function SpecificForm({ type, values, handleChange }: SpecificFormProps) {
    return (
        <>
            {getSpecificProductForm(values, handleChange)[type]}
        </>
    )
}