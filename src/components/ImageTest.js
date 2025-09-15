"use client";

export default function ImageTest() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Image Test Component</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div>
          <h3>Fintech</h3>
          <img src="/fintech.png" alt="Fintech" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
        <div>
          <h3>Education</h3>
          <img src="/Education.png" alt="Education" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
        <div>
          <h3>Medical</h3>
          <img src="/medical.png" alt="Medical" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
        <div>
          <h3>Media</h3>
          <img src="/media.png" alt="Media" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
        <div>
          <h3>Retail</h3>
          <img src="/retail.png" alt="Retail" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
        <div>
          <h3>Logistics</h3>
          <img src="/logistics.png" alt="Logistics" style={{ width: '200px', height: 'auto', border: '2px solid red' }} />
        </div>
      </div>
    </div>
  );
}
