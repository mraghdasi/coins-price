import Container from '../Container/Container';

const Footer = () => {
  return (
    <footer className='footer bg-z-header-footer-bg'>
      <Container>
        <div className='flex justify-between items-center h-24'>
          <div>other</div>
          <div>logo</div>
        </div>
      </Container>

      <Container noPadding>
        <hr />
      </Container>

      <Container>
        <div className='flex justify-center text-z-gray items-center h-10'>
          <div>کلیه حقوق محفوظ است</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
