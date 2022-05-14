import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useNavigate ,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Docs({
    database
}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [docsData, setDocsData] = useState([]);
    const isMounted = useRef();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const collectionRef = collection(database, 'docsData');
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        if(isMounted.current){
            return; 
        }
        isMounted.current = true;
        getData();
    }, []);
    
    const addData = () => {
        addDoc(collectionRef, {
            title: title,
            docDesc: ''
        })
        .then(() => {
            toast.success('Data Added', {
                autoClose: 2000
            });
            handleClose();
        })
        .catch(() => {
            toast.error('Cannot add data', {
                autoClose: 2000
            });
        })
    }
    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }));
        });
    }
    const getID = (id) => {
        navigate(`editDocs/${id}`);
    }
    return (
        <div className='docs-main'>
            <ToastContainer />
            <h1>Docs Clone</h1>

            <button
                className='add-docs'
                onClick={handleOpen}
            >
                Add a Document
            </button>

            <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />
            <div className='grid-main'>
                {docsData.map((doc) => {
                    return (
                        <div className='grid-child' onClick={() => getID(doc.id)}>
                            <p>{doc.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}