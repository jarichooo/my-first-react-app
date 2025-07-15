import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import "./styles/App.css";

function App() {
  const html5QrcodeRef = useRef(null);

  const sendToDb = async (scannedValue) => {
    try{
      const values = scannedValue.split('\n');

      const product = {
        productId: values[0],
        productName: values[1],
        expirationDate: values[2],
        manufactureDate: values[3],
        manufacturer: values[4]
      };

      const response = await fetch('http://localhost:3000/api/value', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' }, 
        body: JSON.stringify(product)
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        alert('Saved!');
      } else {
        console.error(data.message);
        alert('Error saving...');
      }

    } catch (error){
      console.error("Data not sent to Database!", error);
      alert(error)
    }
  }

const startScanner = () => {
    if (!html5QrcodeRef.current) {
      html5QrcodeRef.current = new Html5Qrcode("reader");
    }

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    };

    html5QrcodeRef.current.start(
      { facingMode: "environment" },
      config,
      (decodedText, decodedResult) => {
        
        sendToDb(decodedText);
        stopScanner();
      },
      (errorMessage) => {
        console.warn(errorMessage);
      }
    ).catch(err => {
      alert("Error scanning: " + err);
    });
  };

  const stopScanner = () => {
    if (html5QrcodeRef.current) {
      html5QrcodeRef.current.stop().then(() => {
        html5QrcodeRef.current.clear();
      }).catch(err => {
        alert("Error stopping scanner: " + err);
      });
    }
  };

  useEffect(() => {
    // Cleanup scanner on unmount
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <div className="App">
      <h1>SARI-SCAN</h1>
      
      <div id="scanner-container">
        <div id="reader"></div>
      </div>

      <div className="button-container">
        <button onClick={startScanner}>SCAN</button>
        <button onClick={stopScanner}>STOP</button>
      </div>
    </div>
  );

}

export default App;
