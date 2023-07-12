import React from 'react'
import Header from '../../../layout/Admin/Header/Header'
import { Formik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
const Add = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Formik
                            initialValues={{
                                name: "",
                                quantityPerUnit: ""
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().min(3, "too short").max(15, "too long").required("name is required"),
                                quantityPerUnit: Yup.number().required("quantity is required !")
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                axios.post("https://northwind.vercel.app/api/products", values).then(res => {
                                    console.log(res)
                                })
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.name ? <p className='text-danger'>{errors.name}</p> : ""}
                                    <input
                                        type="number"
                                        name="quantityPerUnit"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.quantityPerUnit}
                                    />
                                    {errors.quantityPerUnit ? <p className='text-danger'>{errors.quantityPerUnit}</p> : ""}
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Add