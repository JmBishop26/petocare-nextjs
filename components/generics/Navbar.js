import Image from 'next/image';
import React from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';
import brand from '../../public/img/brand-logo.png'
import styles from '../../src/styles/modules/Navbar.module.scss'
import Link from 'next/link';
import data from '@/model/data';
export default function Navbar () {
  const columns = data.columnHeaders
  return (
    <nav className={styles.navbar}>
      <Container fluid>
        <Grid columns={2} centered>
              <Grid.Column computer={3} className={styles.navbarBrandWrapper}>
                <Link href="#"><Image src={brand} className={styles.navbarBrandLogo} /></Link>
              </Grid.Column>
              <Grid.Column computer={9} textAlign='center' className={styles.navbarMenuWrapper}>
                <ul className={styles.navbarMenu}>
                  {
                    columns.map((item, index)=>(
                      <li key={index}>
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))
                  }
                  
                </ul>
              </Grid.Column>
              <Grid.Column computer={2} className={styles.navbarBtnWrapper}>
                <Link href="/book" className={styles.navbarBtn}>Book Now</Link>
              </Grid.Column>
        </Grid>
      </Container>
    </nav>
  );
};

