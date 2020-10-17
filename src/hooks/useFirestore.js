import {useState, useEffect} from "react";
import {projectFirestore} from "../firebase/config";
//hook to access firestore and render the products

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => { //snapshot takes an ss type pf the items present at that very moment and return it to u and whenever a new element is added thhis func calls itself
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
            return () => unsub();
    }, [collection]);

    return {docs};
}

export default useFirestore;
