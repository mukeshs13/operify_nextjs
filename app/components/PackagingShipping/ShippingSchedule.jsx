// components/PackagingShipping/ShippingSchedule.jsx
import React from 'react';

const ShippingSchedule = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Shipping Schedule and Address</h3>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Before sending your samples, please notify us promptly by mail or by
          completing the form online, including the Sample Initiation Form. This helps
          us register and process your samples efficiently upon arrival. As we do not
          receive packages on weekends, ensure your samples arrive on a weekday. Avoid
          shipping samples just before weekends (e.g., on a Thursday for Friday
          arrival) or the day before a holiday.
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed font-medium">
            We highly recommend using "Priority Overnight Shipping" for morning
            deliveries, as it is generally more reliable.
          </p>
        </div>
        
        <p className="text-gray-600 leading-relaxed">
          We can pick up the sample from your institution (additional logistic charges
          will be applicable) or you can ship/drop samples at the mentioned address:
        </p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-gray-800 leading-relaxed">
            <div className="font-semibold text-lg text-teal-700 mb-3">
              Operify Tech Pvt.Ltd.
            </div>
            <div className="space-y-1">
              <div>64-65, Satguru Ram Singh Ji Marg,</div>
              <div>Kirti Nagar Industrial Area,</div>
              <div>New Delhi- 110015</div>
            </div>
            <div className="mt-4 space-y-2">
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