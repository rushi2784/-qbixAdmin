import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Anchor, Button, Image, Input, Label, Icon, Text } from "../../components/elements";
import { LabelField, LabelTextarea } from "../../components/fields";
import { CardLayout, CardHeader } from "../../components/cards";
import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../layouts/PageLayout";
import data from "../../data/master/productUpload.json";
import { getLocalData } from "../../Utils/localStorage";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderProvider } from "../../context/Preloader";


export default function ProductVariable() {
    const [category, setCategory] = useState([])
    const [productData, setProductData] = useState({ "rootproductid": "" })
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    console.log(productData)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.hthindia.in/admin/getcategory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admin_jwt: getLocalData("boxApi") })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
                // setCategory(res.data)
                res.data.map((item, i) => (
                    // console.log(item.categorytitle)
                    setCategory([...category, category.push(item.categorytitle)])
                ))
            })

        fetch(`https://api.hthindia.in/admin/getproduct/${id}?admin_jwt=${getLocalData("boxApi")}`)
            .then((res) => res.json())
            .then((res) => {
                setProductData(res.data[0])
                console.log(res)
                setProductData(prv => ({
                    ...prv,
                    rootproductid: res.data[0]._id
                }))
                setLoading(false)

            })

    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;

        setProductData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }



    const handelSubmit = () => {
        fetch(`https://api.hthindia.in/admin/variableproduct?admin_jwt=${getLocalData("boxApi")}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then((res) => res.json())
            .then((res) => {
                // setproductData(res.data[0])
                console.log(res)
                navigate(-1)

            })

    }
    return (
        <PageLayout>
            <Row>
                <Col xl={12}>
                    <CardLayout>
                        <Breadcrumb title={data?.pageTitlevariable}>

                        </Breadcrumb>
                    </CardLayout>
                </Col>
                <LoaderProvider loading={loading}>
                    <Col xl={12}>

                        <CardLayout>
                            <CardHeader title="basic information" dotsMenu={data?.dotsMenu} />
                            <Row>
                                <Col xl={6}><LabelField value={productData?.isvariable} onChange={handleChange} name='isvariable' label="isvariable" option={['No', 'Yes']} fieldSize="w-100 h-md" /></Col>
                                <Col xl={12}><LabelField value={productData?.producttitle} onChange={handleChange} name='producttitle' type="text" label="title" fieldSize="w-100 h-md" /></Col>
                                <Col xl={12}><LabelTextarea value={productData?.productdescription} onChange={handleChange} name='productdescription' label="description" fieldSize="w-100 h-text-md" /></Col>
                                <Col xl={12}><LabelTextarea value={productData?.specifications} onChange={handleChange} name='specifications' label="specifications" fieldSize="w-100 h-text-md" /></Col>
                                <Col xl={6}><LabelField value={productData?.productcategoryname} onChange={handleChange} name='productcategoryname' label="category" option={[...category]} fieldSize="w-100 h-md" /></Col>
                                <Col xl={6}><LabelField value={productData?.productstatus} onChange={handleChange} name='productstatus' label="Product Status" option={['active', 'inActive']} fieldSize="w-100 h-md" /></Col>
                                <Col xl={6}><LabelField value={productData?.productprice} onChange={handleChange} name='productprice' type="text" label="Price" fieldSize="w-100 h-md" /></Col>
                                <Col xl={6}><LabelField value={productData?.isdiscount} onChange={handleChange} name='isdiscount' label="Discount" option={['no', 'yes']} fieldSize="w-100 h-md" /></Col>
                                {productData?.isdiscount === 'yes' ? <Col xl={6}><LabelField value={productData?.discountprice} onChange={handleChange} name='discountprice' type="text" label="Discount Price" fieldSize="w-100 h-md" /></Col> : ""}
                                <Col xl={6}><LabelField value={productData?.productvariation} onChange={handleChange} name='productvariation' type="text" label="Product Variation" fieldSize="w-100 h-md" /></Col>
                                <Col xl={6}><LabelField value={productData?.variationtype} onChange={handleChange} name='variationtype' type="text" label="Variation Type" fieldSize="w-100 h-md" /></Col>
                            </Row>
                        </CardLayout>
                    </Col>

                    <Col xl={12}>
                        <CardLayout>
                            <CardHeader title="media &amp; published" dotsMenu={data?.dotsMenu} />
                            <Box className="mc-product-upload-media">
                                <Col xl={12}><LabelField value={productData?.productimage1} onChange={handleChange} name='productimage1' type="text" label="productimage1" fieldSize="w-100 h-md" /></Col>
                                <Col xl={12}><LabelField value={productData?.productimage2} onChange={handleChange} name='productimage2' type="text" label="productimage2" fieldSize="w-100 h-md" /></Col>
                                <Col xl={12}><LabelField value={productData?.productimage3} onChange={handleChange} name='productimage3' type="text" label="productimage3" fieldSize="w-100 h-md" /></Col>
                                <Col xl={12}><LabelField value={productData?.productimage4} onChange={handleChange} name='productimage4' type="text" label="productimage4" fieldSize="w-100 h-md" /></Col>

                                {/* <Box className="mc-product-upload-file">
                                <Input type="file" name='productimage1' id="product" onChange={(e) => setproductimage1(e.target.files)} />
                                <Label htmlFor="product"><Icon type="collections" /><Text>{`image1`}</Text></Label>
                            </Box>
                            <Box className="mc-product-upload-file">
                                <Input type="file" name='productimage2' id="product" onChange={(e) => setproductimage2(e.target.files)} />
                                <Label htmlFor="product"><Icon type="collections" /><Text>{`image2`}</Text></Label>
                            </Box>
                            <Box className="mc-product-upload-file">
                                <Input type="file" name='productimage3' id="product" onChange={(e) => setproductimage3(e.target.files)} />
                                <Label htmlFor="product"><Icon type="collections" /><Text>{`image3`}</Text></Label>
                            </Box>
                            <Box className="mc-product-upload-file">
                                <Input type="file" name='productimage4' id="product" onChange={(e) => setproductimage4(e.target.files)} />
                                <Label htmlFor="product"><Icon type="collections" /><Text>{`image4`}</Text></Label>
                            </Box> */}
                            </Box>

                            <Anchor
                                onClick={handelSubmit}
                                className="mc-btn w-100 primary mt-5"
                                text="Add Product"
                                icon="cloud_upload"
                                href="#"
                            />
                        </CardLayout>
                    </Col>
                </LoaderProvider>
            </Row>
        </PageLayout >
    )
}