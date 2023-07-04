import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Grid, Header, Input, Select } from 'semantic-ui-react';
import style from "../../src/styles/modules/Buy.module.scss"
import Image from 'next/image';
import data from '@/model/data';
import ConditionalInput from '../generics/ConditionalInput';
import { orderItem } from '@/lib/utils/Functions';



function BuyProduct (props) {
    const {product, error} = props
    const inputFields = data.buyInputFields
    
    const [formData, setFormData] = useState({productID:product[0]._id})
    const [price, setPrice] = useState(product[0].price.$numberDecimal)

    useEffect(()=>{
        if(formData.quantity > 0){
            setPrice((formData.quantity * product[0].price.$numberDecimal).toFixed(2))
        }
        setFormData({...formData, ["price"]:price})
    },[formData.quantity, price])


    const handleSubmit = (e) =>{
        e.preventDefault()
        orderItem(formData)
    }


    return (
        <Container as="section" className={[style.buy, style.generics].join(" ")}>
            <Form onSubmit={handleSubmit}>
                <Grid className={style.buyGrid}>
                    <Grid.Row className={style.buyGridRow}>
                        <Grid.Column className={style.buyGridCols}>
                            <Header as="h1">
                                {`Buy ${product[0].name}`}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className={style.buyGridRow}>
                        <Grid.Column className={style.buyGridCols}>
                            <Image className={style.productImg} src={product[0].image} alt={`${product[0].name}'s Image`} width={720} height={1280}/>
                        </Grid.Column>
                        <Grid.Column className={style.buyGridCols}>
                            <Grid>                            
                                {
                                    inputFields.map((item, index)=>(
                                        <Grid.Row key={index} className={style.buyInnerRow} verticalAlign='middle'>
                                            <Grid.Column className={style.buyInnerCols} verticalAlign='middle'>
                                                <p>{`${item.label}:`}</p>
                                            </Grid.Column>
                                            <Grid.Column className={style.buyInnerCols} >                                        
                                                <ConditionalInput
                                                    placeholder={item.label} 
                                                    name={item.name} 
                                                    condition={item.tag =="select"} 
                                                    options={item.options}
                                                    type={item.type}
                                                    minValue={item.minValue}
                                                    value={formData[item.name]}
                                                    onChange={(e, data)=>{
                                                        e.preventDefault()
                                                        setFormData({   
                                                            ...formData,
                                                            [item.name]:data.value
                                                        })
                                                    }}
                                                />
                                                
                                            </Grid.Column>
                                        </Grid.Row>
                                    ))
                                }
                                
                                <Grid.Row className={style.buyInnerRow} verticalAlign='middle'>
                                    <Grid.Column  className={style.buyInnerImp}>
                                        <p>Total Price: <span>{`$ ${price}`}</span></p>
                                    </Grid.Column>
                                    <Grid.Column  className={style.buyInnerImp}>
                                        <Button type='submit'>Place Order</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </Container>
    );
};


export default BuyProduct
