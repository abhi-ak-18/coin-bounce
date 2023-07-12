import { useState } from "react";
import { submitBlog } from "../../api/internal";
import { useSelector } from "react-redux";
import styles from "./SubmitBlog.module.css";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";


function SubmitBlog(){

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');

    const author = useSelector(state => state.user._id);
    console.log('author'+author);

    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }

    const submitHandler = async () => {
        const data = {
            author, title, content , photo
        };

        const response = await submitBlog(data);

        if(response.status === 201){
            navigate("/");
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Create a Blog</div>
            <TextInput
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value) }
                style={{width: '60%'}}
            />
            <textarea
                className={styles.content}
                placeholder="Your content goes here"
                maxLength={400}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.photoPrompt}>
                <p>Choose a photo</p>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/jpg, image/jpeg , image/png"
                    onChange={getPhoto}
                />
                {photo !== '' ? <img src={photo} height={150} width={150} alt="Image Not available"/> : ""}
            </div>
            <button className={styles.submit} onClick={submitHandler} disabled={title === '' || content === '' || photo === ''}>Submit</button>
        </div>

    )

}

export default SubmitBlog;