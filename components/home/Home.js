import React from 'react';
import { Card, Container, Grid, Label } from 'semantic-ui-react';
import image from '../../public/img/home/home-new.png'
import Image from 'next/image';
import styles from '../../src/styles/modules/Home.module.scss'
import Link from 'next/link';

export default function Home (props) {

    const { products, } = props

    console.log(products)
    return (
    <>
        <section className={styles.banner}>
            <Container>
                <Grid className={styles.bannerGrid}>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column className={styles.bannerImageWrapper} computer={8} verticalAlign='middle' >
                            <Image className={styles.bannerImage} src={image}/>
                        </Grid.Column>
                        <Grid.Column className={styles.bannerTagWrapper} computer={8} verticalAlign='middle'>
                            <h1 className={styles.bannerTag}>The best care<br/>for your best friend</h1>
                            <div className={styles.btnWrapper}>
                                <Link href="#">Book now for only $15/day</Link> 
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
        <section className={styles.products}>
            <Container>
                <Grid className={styles.productsGrid} columns={5}>
                    <Grid.Row verticalAlign='middle'>
                        {
                            products.map((item, index)=>(
                                <Grid.Column className={styles.productsCardWrapper} key={index}>
                                    <Card className={styles.productCard}>
                                        <div className={styles.productPriceWrapper}>
                                            <Label className={styles.productPrice} tag>{`$ ${item.price.$numberDecimal}`}</Label>
                                            </div>
                                        <Image className={styles.productImg}  src={`/img/products/${item.image}`} wrapped width={720} height={1280}/>
                                        <Card.Content className={styles.productCardContent}>
                                            <Card.Header className={styles.productName}>{item.name}</Card.Header>
                                            <Card.Meta className={styles.productCategory}>
                                                <span>{item.category}</span>
                                            </Card.Meta>
                                            <Card.Description className={styles.productDesc}>
                                                {item.description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Link href="#" className={styles.productBtn}>Buy Now</Link>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            ))
                        }
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    </>
  );
};

