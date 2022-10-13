import * as Yup from "yup"

const validations=Yup.object().shape({
    text:Yup.string().required("Required field!")
})

export default validations;