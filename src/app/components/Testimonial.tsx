import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Himran',
    feedback: 'This service is amazing! Highly recommended.',
    image: '/user3.jpg',
    designation: 'Student',
  },
  {
    id: 2,
    name: 'Shuraif',
    feedback: 'A life-changing experience. Exceptional quality and service.',
    image: '/user2.jpg',
    designation: ' Manager',
  },
  {
    id: 3,
    name: 'Arjun',
    feedback: 'Great value for the price. I will definitely come back.',
    image: '/user.jpg',
    designation: 'Entrepreneur',
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-10 text-pink-600">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, feedback, image, designation }) => (
            <div key={id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200 object-cover"
              />
              <h3 className="text-xl font-medium text-gray-700">{name}</h3>
              <p className="text-sm text-gray-500 mb-2">{designation}</p>
              <p className="text-gray-600 italic">"{feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
