import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>STYLED.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          ratione quaerat dolore maiores nemo excepturi sit ex animi debitis?
          Cupiditate ab ut sapiente eos nobis aut, laudantium cumque est officia
          illo, ullam sed? In dolorem perspiciatis doloribus necessitatibus
          totam tenetur!
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> Subhash NAgar, Ajmer
          Rajasthan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +91 1234567890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> webeekajal@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
//https://www.amazon.in/dp/B0B82JLXZS/?coliid=I1SRCLK96E6DHK&colid=9ZK84NVZJR8N&ref_=lv_ov_lig_dp_it_im&th=1&psc=1
//https://www.amazon.in/dp/B08X2R2GKX/?coliid=I2WB5WKM071RWB&colid=9ZK84NVZJR8N&ref_=lv_ov_lig_dp_it_im&th=1&psc=1
//https://www.amazon.in/dp/B08GJ2R5TW/?coliid=I1QOSINQYZM53N&colid=9ZK84NVZJR8N&ref_=lv_ov_lig_dp_it_im&th=1&psc=1
//https://www.amazon.in/Fabricorn-Stylish-Sleeve-Cotton-Tshirt/dp/B08L99Z7CQ/ref=sr_1_13?keywords=tshirt%2Bfor%2Bwomen&qid=1662134702&sprefix=tshirt%2Caps%2C294&sr=8-13&th=1
