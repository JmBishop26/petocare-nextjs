import Image from 'next/image';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import logo from '../../public/img/brand-logo.png'
import styles from "../../src/styles/modules/Footer.module.scss"
import Link from 'next/link';
import { FaFacebookF, FaFacebookMessenger, FaEnvelope } from 'react-icons/fa'


export default function Footer () {
  return (
    <footer className={styles.footer}>
        <Container>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column computer={16} className={styles.footerImgWrapper}>
                        <Link href="#"><Image src={logo}/></Link>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={16} className={styles.footerContentWrapper}>
                        <Grid columns={5}>
                            <Grid.Column className={styles.footerContentCols}>
                                <h3 className={styles.footerMenuHeading}>Services</h3>
                                <ul>
                                    <li><Link href="#">Pet Hotel</Link></li>
                                </ul>
                            </Grid.Column>

                            <Grid.Column className={styles.footerContentCols}>
                                <h3>Products</h3>
                                <ul>
                                    <li><Link href="#">Pet Food</Link></li>
                                    <li><Link href="#">Pet Hygiene</Link></li>
                                    <li><Link href="#">Pet Toy</Link></li>
                                    <li><Link href="#">Pet Accessories</Link></li>
                                </ul>
                            </Grid.Column>

                            <Grid.Column className={styles.footerContentCols}>
                                <h3>About Us</h3>
                                <ul>
                                    <li><Link href="#">Mission</Link></li>
                                    <li><Link href="#">Vision</Link></li>
                                    <li><Link href="#">Our Story</Link></li>
                                </ul>
                            </Grid.Column>

                            <Grid.Column className={styles.footerContentCols}>
                                <h3>Contact Us</h3>
                                <ul className={styles.footerItemIcon}>
                                    <li>
                                        <Link href="#">
                                            <FaFacebookMessenger/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaEnvelope/>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid.Column>

                            <Grid.Column className={styles.footerContentCols}>
                                <h3>Follow Us</h3>
                                <ul className={styles.footerItemIcon}>
                                    <li>
                                        <Link href="#">
                                            <FaFacebookF/>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid.Column>

                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className={styles.copyrightWrapper}>
                    <Grid.Column className={styles.copyright}>
                        <span>Copyright &copy; Pet-O-Care. All Rights Reserved.</span>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </footer>

  );
};
