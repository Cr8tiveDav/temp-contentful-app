import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Pour-over drinking vinegar vibecession woke post-ironic crucifix.
            Man braid asymmetrical neutra, meggings air plant hot chicken
            bushwick DSA kinfolk cloud bread. Iceland drinking vinegar you
            probably haven't heard of them post-ironic kitsch cray.{' '}
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} className='img' alt='woman presenting' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
