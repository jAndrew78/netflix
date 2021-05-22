import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';


// target will be movies or series depending on user selection
export default function useContent(target) {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            // use firebase to access the collection of movies or series
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.docs.map(contentObj => ({
                    // spread all data to get the docId, will use docId as item key for each
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [target, firebase]);

    return { [target]: content };
}