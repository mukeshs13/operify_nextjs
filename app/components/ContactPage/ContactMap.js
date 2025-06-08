import React from 'react';

const ContactMap = () => {
  return (
    <section className="contact-iframe-section mb-8">
      <div className="w-full p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4153.06833268994!2d77.14586737601705!3d28.65493368306228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c0d9e73225%3A0xfd48e79d8462e401!2soperifytech!5e1!3m2!1sen!2sin!4v1728660015382!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 md:h-80 lg:h-96 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default ContactMap;