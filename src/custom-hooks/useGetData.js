import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

const useGetData = (collectName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const collectionRef = collection(db, collectName);

  useEffect(() => {
    // Subscribe to Firestore updates in real-time
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      // Check if snapshot has any data
      console.log("Snapshot received:", snapshot);

      if (snapshot.empty) {
        console.log("No documents in the collection");
      } else {
        const fetchedData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("Fetched Data:", fetchedData);
        setData(fetchedData);
        setLoading(false); // Stop loading when data is fetched
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [collectName]);

  return { data, loading };
};

export default useGetData;
