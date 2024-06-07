import React from 'react';

const LicensesAndCertifications = () => {
  return (
    <section className="p-4 bg-white text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4">Licenses & Certifications</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Project Management Essentials Certified, Management & Strategy Institute</h3>
          <p className="text-gray-600">Jun 2024</p>
          <p className="mt-2">The Project Management Essentials Certification, will provide with a basic understanding of Project Management principles.</p>
        </div>
        {/* Add more certification items as needed */}
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
