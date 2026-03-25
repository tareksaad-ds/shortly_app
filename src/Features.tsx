import './App.css';

function Features() {
  const features = [
    {
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
      image:
        'https://plus.unsplash.com/premium_photo-1720032305135-a87c5e0888b6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5JTIwZmVhdHVyZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      image:
        'https://plus.unsplash.com/premium_photo-1728457508551-8973fedacaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVhdHVyZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      image:
        'https://plus.unsplash.com/premium_photo-1685227391150-25a92ae1d5f5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2V5JTIwZmVhdHVyZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Analytics',
      description:
        'Understand your audience better with detailed analytics and reporting.',
      image:
        'https://plus.unsplash.com/premium_photo-1677093906217-9420a5f16322?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmFsJTIwaW5mb3JtYXRpb258ZW58MHx8MHx8fDA%3D',
    },
  ];
  return (
    <div className="features-container">
      <h1 id="features">Features</h1>
      <div className="features-wrapper">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
