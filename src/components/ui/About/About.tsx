import AboutCards from '../AboutCards/AboutCards';

const About = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className="h2 text-center">О нашем клубе</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <AboutCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
