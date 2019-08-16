import React from 'react';
import { Upload, Icon, message, Card, Typography } from 'antd';
import Header from '../../portfolio/header/header';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}


function ArianaCamilaClassifier() {

    const [previewImage, setPreviewImage] = React.useState('');
    const [name, setName] = React.useState('...')
    
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
    };

    const props = {
        name: 'image',
        multiple: false,
        accept: "image/*",
        action: 'http://127.0.0.1:5000/predict',
        onChange(info) {
          if (info.file.response){
            message.success(`${info.file.response} Detected`);
            handlePreview(info.file);
            setName(info.file.response);
          }
        },
    };

    return (
        <React.Fragment>
            <Header />
            <Card style = {{ maxHeight: '100%', maxWidth: '100%' }}>
                <Typography.Title style={{textAlign: 'center'}}>Camila Cabello vs Ariana Grande Image Classifier</Typography.Title>
                <Typography.Title level={2} style={{textAlign: 'center'}}>This is {name}</Typography.Title>
                <div style= {{display:'flex', flexDirection: 'row'}}>
                    <div style= {{width: '40%'}}>
                        <Upload.Dragger {...props} style ={{padding: '20px'}}>
                            <p className="ant-upload-drag-icon"> <Icon type="inbox" /></p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support only a single file upload. Ariana Grande vs Camila Cabello classifier using deep learning</p>
                        </Upload.Dragger>
                    </div>
                    <img style = {{maxHeight: '450px', width: 'auto'}} src={previewImage} />
                </div>
            </Card>
        </React.Fragment>
    )
}

export default ArianaCamilaClassifier;