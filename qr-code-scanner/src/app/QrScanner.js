'use client'; 

import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styles from "./components/QrScanner.module.css";

export default function QrScanner() {
  const html5QrcodeRef = useRef(null);

  // Start scanner function
  const startScanner = () => {
    if (!html5QrcodeRef.current) {
      html5QrcodeRef.current = new Html5Qrcode("reader");
    }
    Html5Qrcode.getCameras().then(devices => {
      if (devices && devices.length) {
        const cameraId = devices[0].id;

        html5QrcodeRef.current.start(
          cameraId,
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText, decodedResult) => {
            alert("Scanned QR: " + decodedText);
            stopScanner();
          },
          (errorMessage) => {
            console.warn(errorMessage);
          }
        ).catch(err => {
          alert("Error scanning: " + err);
        });
      }
    }).catch(err => {
      alert("Camera access error: " + err);
    });
  };

  // Stop scanner function
  const stopScanner = () => {
    if (html5QrcodeRef.current) {
      html5QrcodeRef.current.stop().then(() => {
        html5QrcodeRef.current.clear();
      }).catch(err => {
        alert("Error stopping scanner: " + err);
      });
    }
  };

  // Initialize scanner on mount
  useEffect(() => {
    startScanner();

    // Cleanup on unmount
    return () => {
      stopScanner();
    };
  }, []);

 return (
    <div className={styles.container}>
      <div id="reader" className={styles.reader}></div>
        <div className={styles.buttonContainer}>
            <button onClick={startScanner} className={styles.button}>RESCAN</button>
            <button onClick={stopScanner} className={styles.button}>STOP</button>
      </div>
    </div>
  );y
}
