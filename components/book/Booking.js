import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Grid, Header, Input, Select } from 'semantic-ui-react';
import style from "../../src/styles/modules/Booking.module.scss"
import Image from 'next/image';
import brand from '../../public/img/brand-logo.png'
import data from '@/model/data';
import { bookRoom, getRooms } from '@/lib/utils/Functions';
// import { submitBooking } from '@/redux/action/booking/BookingAction';
// import { connect } from 'react-redux';

function Condition(props){
    const {placeholder, name, condition, type, options, value, onChange} = props
    return condition ?(
        <Select placeholder={placeholder} name={name} options={options} className={style.select} value={value} onChange={onChange} required={true}/>
    ) : (
        <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required/>
    )
}

function Booking () {

    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        getRooms()
        .then((response)=>{
            setRooms(response.data)
        })
        .catch(error=>{
            console.error("Error fetching rooms. ", error)
        })
    }, [])

    const inputFields = data.inputFields(rooms)
    const [formData, setFormData] = useState({})


    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(formData)
        bookRoom(formData)
    }


    return (
        <Container as="section" className={[style.book, style.generics].join(" ")}>
            <Form onSubmit={handleSubmit}>
                <Grid verticalAlign='middle' className={style.bookGrid} centered>
                    <Grid.Row centered className={style.bookGridRow} >
                        <Grid.Column textAlign='center' >
                            {/* <Image src={brand}></Image> */}
                            <Header as="h1">
                                Pet Room Reservation
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered className={style.bookGridRow}>
                        
                            {inputFields.map((item, index)=>(
                                <Grid.Column key={index} width={8} className={[style.bookGridColumn, style.fields].join(" ")}>
                                    <Form.Field required>
                                        <label><p>{item.label}</p></label>
                                        <Condition 
                                            placeholder={item.label} 
                                            name={item.name} 
                                            condition={item.tag =="select"} 
                                            options={item.options}
                                            type={item.type}
                                            value={formData[item.name]}
                                            onChange={(e, data)=>{
                                                e.preventDefault()
                                                setFormData({   
                                                    ...formData,
                                                    [item.name]:data.value
                                                })
                                            }}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                            ))}
                            <Grid.Column width={16} textAlign='center'>
                                <Button type='submit'>Book</Button>
                            </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </Container>
    );
};

// const mapStatetoProps=(state)=>{
//     return{
//         props: state.book.formData
//     }
// } 

// const mapDispatchtoProps=(dispatch)=>{
//     return{
//         submitBooking: (formData)=>dispatch(submitBooking(formData))
//     }
// }

// export default connect(mapStatetoProps,mapDispatchtoProps)(Booking)
export default Booking
