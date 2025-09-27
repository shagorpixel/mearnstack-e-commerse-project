const About = () => {
  return (
    <div className=" customContainer">
      <div className=" text-2xl text-center pt-8 border-t border-gray-200">
        <h2 className=" text-3xl">about Us</h2>
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img className=" w-full md:max-w-[450px]" src="https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society.jpg" alt="" />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4
        text-gray-600">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio exercitationem adipisci officia, est iste totam minima incidunt accusamus sunt quas dolorem reprehenderit in magni quo debitis qui quidem voluptates nostrum inventore. Possimus nam cumque earum et maiores voluptate. Minus aspernatur est, at impedit debitis maiores quisquam beatae ex ullam iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam voluptatum fugit quo quasi. Quidem, ducimus mollitia! Quam quas necessitatibus incidunt.</p>
            <h3 className=" text-gray-800 font-bold ">Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia earum beatae temporibus? Fugit est illum cum itaque quam? Facere!</p>
        </div>
      </div>
      <h2 className=" text-4xl py-4">
       WHY CHOOSE US
      </h2>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
            <div className=" border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <h3><b>Quality Assurance:</b></h3>
                <p className=" text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className=" border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <h3><b>Convenience:</b></h3>
                <p className=" text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className=" border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <h3><b>Exceptional Customer Service:</b></h3>
                <p className=" text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
      </div>
    </div>
  );
};

export default About;