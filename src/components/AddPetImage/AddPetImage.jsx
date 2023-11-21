import { useState } from "react";
import { PhotoContainer, UserDataWrapper, UserPhotoWrapper} from "./AddPetImage.styled"

function AddPetImage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => { 
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log(selectedFile)
        // console.log(URL.createObjectURL(selectedFile))
    }

    return (
        <div>
            <UserDataWrapper>
            {selectedFile ? (
              <UserPhotoWrapper>
                <PhotoContainer
                    // src={URL.createObjectURL(selectedFile)}
                    alt="User's file"
                    style={{ maxWidth: '300px' }}
                />
              </UserPhotoWrapper>
            ) : (
              <UserPhotoWrapper>
                <PhotoContainer
                    
                    alt="Default avatar"
                    style={{ maxWidth: '300px' }}
                />
                <input type="file" name="image" onChange={handleChange}/>
                {/* <UserPhotoBtn
                    type="button"
                    onClick={onSubmit}
                > Add Photo
                </UserPhotoBtn> */}
              </UserPhotoWrapper>
            )}
            </UserDataWrapper>    
        </div>
    )
}

export default AddPetImage
