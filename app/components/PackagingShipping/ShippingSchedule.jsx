import React from 'react';

const ShippingSchedule = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color: '#555555' }}>Shipping Schedule and Address</h3>
      </div>
      
      <div className="space-y-6">
        <p className="leading-relaxed" style={{ color: '#555555' }}>
          Before sending your samples, please notify us promptly by mail or by
          completing the form online, including the Sample Initiation Form. This helps
          us register and process your samples efficiently upon arrival. As we do not
          receive packages on weekends, ensure your samples arrive on a weekday. Avoid
          shipping samples just before weekends (e.g., on a Thursday for Friday
          arrival) or the day before a holiday.
        </p>
        
        <p className="leading-relaxed font-medium" style={{ color: '#555555' }}>
          We highly recommend using "Priority Overnight Shipping" for morning
          deliveries, as it is generally more reliable.
        </p>
        
        <p className="leading-relaxed" style={{ color: '#555555' }}>
          We can pick up the sample from your institution (additional logistic charges
          will be applicable) or you can ship/drop samples at the mentioned address:
        </p>
        
        <div >
          <div className="leading-relaxed" style={{ color: '#555555' }}>
            <div className="font-semibold text-lg text-teal-700 mb-3">
              Operify Tech Pvt.Ltd.
            </div>
            <div className="space-y-1">
              <div>64-65, Satguru Ram Singh Ji Marg,</div>
              <div>Kirti Nagar Industrial Area,</div>
              <div>New Delhi- 110015</div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:9319171176" className="text-teal-600 hover:text-teal-800">
                  9319171176
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:Info@operifytech.com" className="text-teal-600 hover:text-teal-800">
                  Info@operifytech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingSchedule;